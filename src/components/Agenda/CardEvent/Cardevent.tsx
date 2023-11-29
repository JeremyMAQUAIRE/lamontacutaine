import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

import './CardEvent.scss';

interface CardEventProps {
  imageUrl: string;
  title: string;
  date: string;
  eventId: number;
  description: string;
}

const CardEvent = ({
  imageUrl,
  title,
  date,
  eventId,
  description,
}: CardEventProps) => {
  return (
    <Link to={`/event-detail/${eventId}`} className="cardEvent-link">
      <Card
        className="cardEvent-content"
        image={imageUrl}
        header={title}
        meta={date}
        description={description}
      />
    </Link>
  );
};

export default CardEvent;
