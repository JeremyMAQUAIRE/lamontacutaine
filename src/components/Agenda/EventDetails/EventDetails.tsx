import { useEffect } from 'react';
import { AnyAction } from 'redux';
import { useParams } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

import fetchDataEvent from '../../store/thunks/eventThunk';
import { RootState } from '../../store/store';

import './EventDetails.scss';

const EventDetail = () => {
  const dispatch = useDispatch();
  const { eventId } = useParams<{ eventId: string }>();

  useEffect(() => {
    if (eventId) {
      dispatch(fetchDataEvent() as unknown as AnyAction);
    }
  }, [dispatch, eventId]);

  const event = useSelector((state: RootState) =>
    state.agendaReducer.events.find((e) => e.id === Number(eventId))
  );

  // Vérification de nullité avant d'accéder aux propriétés de 'event'
  if (!event) {
    return <p>L&apos;événement n&apos;existe pas.</p>;
  }

  return (
    <div className="eventDetail-content">
      <div className="eventDetail-left">
        <h1 className="eventDetail-title">{event.title}</h1>
        <p className="eventDetail-description">{event.description}</p>
        <div className="eventDetail-info">
          <p className="eventDetail-date">
            {new Date(event.start_date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            <br />
            <br />
            {event.event_location}
          </p>
          <p className="eventDetail-price">
            Participation :<br />
            <br />
            {event.price} euros
          </p>
          {event.open_to_trader && (
            <div>
              <a href="/contactez-nous" className="eventDetail-button-link">
                Exposé pour cet événement
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="eventDetail-right">
        {event.medias && event.medias.length > 0 && (
          <div className="eventDetail-images">
            {event.medias.slice(0, 3).map((media, index) => (
              <div
                className={`eventDetail-picture ${
                  index === 2 ? 'eventDetail-picture-full' : ''
                }`}
                key={media.id}
              >
                <Image
                  src={`https://admin.lamontacutaine.fr/${media.url}`}
                  wrapped
                  ui={false} // désactive les styles par défaut de Semantic UI pour l'image
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
