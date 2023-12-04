import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logoTouch.webp';

import './BuildPage.scss';

interface IBuildPageProps {
  message: string;
}

const BuildPage = ({ message = 'Veuillez patienter...' }: IBuildPageProps) => {
  return (
    <div className="waiting-page">
      <div>
        <img src={logo} alt="Logo" className="logoAnime" />
      </div>
      <h2 className="waitingH2">{message}</h2>
      <div className="paragraheWPage">
        <p className="waitingP">
          Notre site Web est en construction, mais nous sommes à votre écoute.
        </p>
        <p className="waitingP">
          Envie d&apos;en savoir plus sur nous, de nous parler de votre projet
          ou tout simplement de nous dire bonjour?
        </p>
        <p className="waitingP">
          Écrivez-nous et nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
      <Link to="/contactez-nous" className="contact-button">
        Ecrivez-nous
      </Link>
    </div>
  );
};

export default BuildPage;
