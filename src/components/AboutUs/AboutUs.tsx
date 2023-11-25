import logo from '../../assets/logoFull.webp';

import './AboutUs.scss';

const AboutUS = () => {
  return (
    <div className="aboutUs-content">
      <section className="about-section1">
        <h1 className="about-section1-title">
          Réveiller le village et amuser toutes les générations...
        </h1>
        <img
          src={logo}
          alt="Logo de la Montacutaine"
          className="about-section1-image"
        />
        <p className="about-section1-text">
          Association loi 1901 créée en juillet 2022 à Montaigut-en-Combraille
          pour proposer des animations et festivités à toutes les canailles du
          coin.
        </p>
      </section>
      <section className="about-section2">
        <h2 className="about-section2-title">Qui sommes-nous ?</h2>
        <p className="about-section2-text">
          La Montacutaine, c&apos;est une quarantaine de bénévoles qui
          s&apos;emploient à proposer des festivités pour tous et tout au long
          de l&apos;année Montaigut-en-Combraille.
        </p>
        <br />
        <p className="about-section2-text">
          Créée en juillet 2022 à l’initiative d’une vingtaine de membres
          fondateurs, l’association réalise depuis une dizaine de manifestations
          par an et ne cesse de croître. Les membres se réunissent environ une
          fois par mois et organisent une assemblée générale tous les ans,
          ouverte à tous.
        </p>
      </section>
    </div>
  );
};

export default AboutUS;
