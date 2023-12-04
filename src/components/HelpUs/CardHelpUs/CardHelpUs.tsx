import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './CardHelpUs.scss';

interface ICardContactUsProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CardHelpUs = ({
  title,
  description,
  image,
  link,
}: ICardContactUsProps) => {
  return (
    <div className="CardHelpUs-content">
      <Link className="CardHelpUs-link" to={link}>
        <Card className="CardHelpUs-card">
          <Image src={image} className="CardHelpUs-image" />
          <Card.Content className="CardHelpUs-cardContent">
            <Card.Header>{title}</Card.Header>
            <Card.Description className="CardHelpUs-description">
              {description}
            </Card.Description>
          </Card.Content>
        </Card>
      </Link>
    </div>
  );
};

export default CardHelpUs;
