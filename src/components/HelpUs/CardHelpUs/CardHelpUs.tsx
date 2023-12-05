import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './CardHelpUs.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { actionChangeFormChoice } from '../../store/actionscreator';

interface ICardContactUsProps {
  title: string;
  description: string;
  image: string;
  link: string;
  choice: string;
}

const CardHelpUs = ({
  title,
  description,
  image,
  link,
  choice,
}: ICardContactUsProps) => {
  const dispatch: AppDispatch = useDispatch();
  const handleChoiceFormbecomeAMember = () => {
    dispatch(actionChangeFormChoice(choice));
  };
  return (
    <div className="CardHelpUs-content">
      <Link
        className="CardHelpUs-link"
        to={link}
        onClick={handleChoiceFormbecomeAMember}
      >
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
