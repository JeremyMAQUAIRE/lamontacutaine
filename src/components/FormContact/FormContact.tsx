import { Form, TextArea, Input, Select, Image } from 'semantic-ui-react';

import logo from '../../assets/logoFull.webp';
import eglise from '../../assets/image/egliseMontaigut.png';

import './FormContact.scss';

const options = [
  { key: 'a', text: 'Devenir adhérent', value: 'devenir-adherent' },
  { key: 'b', text: 'Boite à idée', value: 'boite-a-idee' },
  { key: 'o', text: 'Nous sponsoriser', value: 'nous-sponsoriser' },
  {
    key: 'l',
    text: 'Nous laisser un commentaire',
    value: 'laissez-nous-un-commentaire',
  },
  { key: 'x', text: 'Autres', value: 'autre' },
];

const FormContact = () => {
  return (
    <div className="formContact-content">
      <div>
        <h1> Contactez-nous ! </h1>
        <p> Une question, envoyez-nous un message </p>
        <Form>
          <Select options={options} defaultValue="autre" />
          <Form.Field control={Input}>
            <label htmlFor="#">Nom</label>
            <input />
          </Form.Field>
          <Form.Field control={Input}>
            <label htmlFor="#">Prénom</label>
            <input />
          </Form.Field>
          <Form.Field control={Input}>
            <label htmlFor="#">Mail</label>
            <input />
          </Form.Field>
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Opinion"
            placeholder="Opinion"
          />
        </Form>
      </div>
      <div>
        <Image src={logo} />
        <Image src={eglise} />
      </div>
    </div>
  );
};

export default FormContact;
