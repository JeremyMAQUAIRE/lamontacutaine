import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './CardContact.scss';

interface ICardContactUsProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CardContactUs = ({
  title,
  description,
  image,
  link,
}: ICardContactUsProps) => {
  return (
    <div className="cardContactUs-content">
      <Link className="cardContactUs-link" to={link}>
        <Card className="cardContactUs-card">
          <Image src={image} className="cardContactUs-image" />
          <Card.Content className="cardContactUs-cardContent">
            <Card.Header>{title}</Card.Header>
            <Card.Description className="cardContactUs-description">
              {description}
            </Card.Description>
          </Card.Content>
        </Card>
      </Link>
    </div>
  );
};

export default CardContactUs;
