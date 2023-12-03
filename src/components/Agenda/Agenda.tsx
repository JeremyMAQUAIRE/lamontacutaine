import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

import CardEvent from './CardEvent/Cardevent';
import fetchDataEvent from '../store/thunks/eventThunk';

import './Agenda.scss';

interface IMedia {
  id: number;
  title: string;
  type: string;
  url: string;
  home_slider: boolean;
  cover_media: boolean;
  preview_order: number | null;
}

interface IEvent {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  inscription_end_date: string | null;
  maximum_capacity: number;
  event_location: string;
  price: string;
  open_to_trader: boolean;
  category: Array<{ id: number; name: string }>;
  medias: Array<IMedia>;
}

const Agenda = () => {
  const dispatch: AppDispatch = useDispatch();
  const events = useSelector((state: RootState) => state.agendaReducer.events);
  useEffect(() => {
    dispatch(fetchDataEvent());
  }, [dispatch]);
  const link = 'https://admin.lamontacutaine.fr/';
  return (
    <div className="agenda-content">
      <h1 className="agenda-title" id="agenda-title">
        Agenda : pour ne rien manquer !
      </h1>
      <div className="agenda-cardEvent">
        {events &&
          events.slice(0, 8).map((event: IEvent) => (
            <CardEvent
              key={event.id}
              imageUrl={`${link}${
                event.medias.find((media) => media.cover_media)?.url || ''
              }`}
              title={event.title}
              date={new Date(event.start_date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              eventId={event.id}
              description={event.description}
            />
          ))}
      </div>
    </div>
  );
};

export default Agenda;
