import { Button, Form } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent } from 'react';

import { AppDispatch, RootState } from '../store/store';
import ContactInfo from './ContactInfo';

import './FormContact.scss';
import { actionChangeFormChoice } from '../store/actionscreator';
import BecomeAMember from './BecomeAMember';
import BoxOfidea from './BoxOfIdeas';
import SponsorUS from './SponsorUS';

const getDefaultValue = (formChoice: string) => {
  if (formChoice === 'joinUs') {
    return 'joinUs';
  }
  if (formChoice === 'becomeAMember') {
    return 'becomeAMember';
  }
  if (formChoice === 'boxOfIdeas') {
    return 'boxOfIdeas';
  }
  if (formChoice === 'sponsorUS') {
    return 'sponsorUS';
  }
  if (formChoice === 'comment') {
    return 'comment';
  }
  return 'joinUs';
};

const FormContact = () => {
  const dispatch: AppDispatch = useDispatch();
  const formChoice = useSelector(
    (state: RootState) => state.formReducer.choice
  );
  const handleChoiceForm = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(actionChangeFormChoice(event.target.value));
  };
  return (
    <div className="formContact-content">
      <div className="formContact-left">
        <h1 className="formContact-title">
          {formChoice === 'joinUs' && 'Contactez-nous'}
          {formChoice === 'becomeAMember' && 'Rejoignez-nous !'}
          {formChoice === 'boxOfIdeas' && 'Boîte à idées...'}
          {formChoice === 'comment' && 'Donnez-nous votre avis !'}
          {formChoice === 'sponsorUS' && "Devenez sponsor de l'association !"}
        </h1>
        <Form className="formContact-form">
          <Form.Field
            label="Vous nous contacter pour ..."
            control="select"
            className="formContact-label"
            defaultValue={getDefaultValue(formChoice)}
            onChange={handleChoiceForm}
          >
            <option value="becomeAMember">Devenir adhérent</option>
            <option value="boxOfIdeas">Boite à idée</option>
            <option value="sponsorUS">Nous sponsoriser</option>
            <option value="comment">Laisser un commentaire</option>
            <option value="joinUs">Autres</option>
          </Form.Field>
          <Form.Field>
            <label htmlFor="#" className="formContact-label">
              Nom
            </label>
            <input />
          </Form.Field>
          <Form.Field>
            <label htmlFor="#" className="formContact-label">
              Prénom
            </label>
            <input />
          </Form.Field>
          <Form.Field>
            <label htmlFor="#" className="formContact-label">
              Mail
            </label>
            <input />
          </Form.Field>
          <Form.Field>
            <label htmlFor="#" className="formContact-label">
              Message
            </label>
            <textarea />
          </Form.Field>
          <Button fluid className="formContact-button">
            Envoyer votre message
          </Button>
        </Form>
      </div>
      <div className="formContact-right">
        {formChoice === 'joinUs' && <ContactInfo />}
        {formChoice === 'becomeAMember' && <BecomeAMember />}
        {formChoice === 'boxOfIdeas' && <BoxOfidea />}
        {formChoice === 'sponsorUS' && <SponsorUS />}
      </div>
    </div>
  );
};

export default FormContact;
