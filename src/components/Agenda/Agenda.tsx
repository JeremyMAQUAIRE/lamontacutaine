import './Agenda.scss';
import CardEvent from './CardEvent/Cardevent';

import image from '../../assets/image/profil/damien.png';

const Agenda = () => {
  return (
    <div className="agenda-content">
      <h1 className="agenda-title" id="agenda-title">
        Agenda : pour ne rien manquer !
      </h1>
      <div className="agenda-cardEvent">
        <CardEvent
          key="1"
          imageUrl={image}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate. "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in gravida lectus. Ut non dapibus nulla. Proin vitae ligula ex. Mauris aliquam tincidunt volutpat. Morbi non faucibus urna. Proin nec mauris eu dolor interdum posuere in vel libero. Pellentesque mollis pulvinar leo, in suscipit diam fermentum non. Nulla vitae dolor. "
          date={new Date().toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          eventId={0}
        />
        <CardEvent
          key="1"
          imageUrl={image}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate. "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in gravida lectus. Ut non dapibus nulla. Proin vitae ligula ex. Mauris aliquam tincidunt volutpat. Morbi non faucibus urna. Proin nec mauris eu dolor interdum posuere in vel libero. Pellentesque mollis pulvinar leo, in suscipit diam fermentum non. Nulla vitae dolor. "
          date={new Date().toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          eventId={0}
        />
        <CardEvent
          key="1"
          imageUrl={image}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate. "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in gravida lectus. Ut non dapibus nulla. Proin vitae ligula ex. Mauris aliquam tincidunt volutpat. Morbi non faucibus urna. Proin nec mauris eu dolor interdum posuere in vel libero. Pellentesque mollis pulvinar leo, in suscipit diam fermentum non. Nulla vitae dolor. "
          date={new Date().toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          eventId={0}
        />
        <CardEvent
          key="1"
          imageUrl={image}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate. "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in gravida lectus. Ut non dapibus nulla. Proin vitae ligula ex. Mauris aliquam tincidunt volutpat. Morbi non faucibus urna. Proin nec mauris eu dolor interdum posuere in vel libero. Pellentesque mollis pulvinar leo, in suscipit diam fermentum non. Nulla vitae dolor. "
          date={new Date().toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          eventId={0}
        />
        <CardEvent
          key="1"
          imageUrl={image}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate. "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in gravida lectus. Ut non dapibus nulla. Proin vitae ligula ex. Mauris aliquam tincidunt volutpat. Morbi non faucibus urna. Proin nec mauris eu dolor interdum posuere in vel libero. Pellentesque mollis pulvinar leo, in suscipit diam fermentum non. Nulla vitae dolor. "
          date={new Date().toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          eventId={0}
        />
        <CardEvent
          key="1"
          imageUrl={image}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate. "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in gravida lectus. Ut non dapibus nulla. Proin vitae ligula ex. Mauris aliquam tincidunt volutpat. Morbi non faucibus urna. Proin nec mauris eu dolor interdum posuere in vel libero. Pellentesque mollis pulvinar leo, in suscipit diam fermentum non. Nulla vitae dolor. "
          date={new Date().toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          eventId={0}
        />
        <CardEvent
          key="1"
          imageUrl={image}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate. "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in gravida lectus. Ut non dapibus nulla. Proin vitae ligula ex. Mauris aliquam tincidunt volutpat. Morbi non faucibus urna. Proin nec mauris eu dolor interdum posuere in vel libero. Pellentesque mollis pulvinar leo, in suscipit diam fermentum non. Nulla vitae dolor. "
          date={new Date().toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          eventId={0}
        />
      </div>
    </div>
  );
};

export default Agenda;
