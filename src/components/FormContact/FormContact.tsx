import { Form, TextArea, Input, Select, Image } from 'semantic-ui-react';

import './FormContact.scss';
import ContactInfo from './ContactInfo';

const FormContact = () => {
  return (
    <div className="formContact-content">
      <div className="formContact-left">
        <h1 className="formContact-title"> Contactez-nous ! </h1>
        <Form className="formContact-form">
          <Form.Field
            label="Choix"
            control="select"
            className="formContact-label"
          >
            <option value="devenir-adherent">Devenir adhérent</option>
            <option value="boite-a-idee">Boite à idée</option>
            <option value="nous-sponsoriser">Nous sponsoriser</option>
            <option value="laissez-nous-un-commentaire">
              Laisser un commentaire
            </option>
            <option value="autre" defaultChecked>
              Autres
            </option>
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
        </Form>
      </div>
      <div className="formContact-right">
        <ContactInfo />
      </div>
    </div>
  );
};

export default FormContact;
