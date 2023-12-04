import { Image } from 'semantic-ui-react';

import logo from '../../assets/logoFull.webp';
import eglise from '../../assets/image/egliseMontaigut.png';

import './FormContact.scss';

const ContactInfo = () => {
  return (
    <>
      <Image src={logo} className="contactInfo-logo" />
      <Image src={eglise} className="contactInfo-image" />
    </>
  );
};

export default ContactInfo;
