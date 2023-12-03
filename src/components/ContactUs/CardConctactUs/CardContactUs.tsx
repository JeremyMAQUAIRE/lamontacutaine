import { Card, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../ContactUs.scss';

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
    <div className="all-cards-we-need-you">
      <Grid.Column>
        <div className="cards-we-need-you">
          <Link className="form-link-we-need-you" to={link}>
            <Card className="cards-size-we-need-you">
              <Image src={image} />
              <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Description>{description}</Card.Description>
              </Card.Content>
            </Card>
          </Link>
        </div>
      </Grid.Column>
    </div>
  );
};

export default CardContactUs;
