import { Button, Grid, Image, Segment, Select } from 'semantic-ui-react';

import logo from '../../assets/logoFull.webp';
import damien from '../../assets/image/profil/damien.png';
import valerie from '../../assets/image/profil/valérie.png';
import emilie from '../../assets/image/profil/emilie.png';
import thomas from '../../assets/image/profil/thomas.png';
import fred from '../../assets/image/profil/fred.png';
import margaux from '../../assets/image/profil/margaux.png';

import './AboutUs.scss';

const AboutUS = () => {
  /* Creation of a table with the years 2022 to today */
  const currentYear = new Date().getFullYear();
  const listYear = Array.from({ length: currentYear - 2021 }, (_, index) => {
    const year = currentYear - index;
    return { key: String(year), value: year, text: String(year) };
  });
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
        <div className="about-section2-container-button">
          <Button className="about-section2-button"> Gouvernance</Button>
          <Button className="about-section2-button"> Rapports Moraux</Button>
          <Button className="about-section2-button">
            Rapports d&apos;activités
          </Button>
          <Button className="about-section2-button">Rapports financiers</Button>
        </div>
      </section>
      <section className="about-section3">
        <h2 className="about-section3-title">Gouvernance</h2>
        <Grid celled className="about-section3-grid">
          <Grid.Row className="about-section3-row1">
            <Grid.Column width={4} verticalAlign="middle">
              <Image src={damien} size="medium" circular />
            </Grid.Column>
            <Grid.Column width={12} className="about-section3-column">
              <Segment className="about-section3-segment about-section3-name">
                LABRE Damien
              </Segment>
              <Segment className="about-section3-segment about-section3-job">
                Président
              </Segment>
              <Segment className="about-section3-segment about-section3-phone">
                06.58.94.58.90
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="about-section3-row2">
            <Grid.Column width={4} verticalAlign="middle">
              <Image src={valerie} size="medium" circular />
            </Grid.Column>
            <Grid.Column width={12} className="about-section3-column">
              <Segment className="about-section3-segment about-section3-name">
                ROOSE Valérie
              </Segment>
              <Segment className="about-section3-segment about-section3-job">
                Vice-Présidente
              </Segment>
              <Segment className="about-section3-segment about-section3-phone">
                06.29.48.38.35
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="about-section3-row3">
            <Grid.Column width={4} verticalAlign="middle">
              <Image src={emilie} size="medium" circular />
            </Grid.Column>
            <Grid.Column
              width={12}
              verticalAlign="middle"
              className="about-section3-column"
            >
              <Segment className="about-section3-segment about-section3-name">
                BOUSCAVERT Emilie
              </Segment>
              <Segment className="about-section3-segment about-section3-job">
                Responsable Administrative
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="about-section3-row4">
            <Grid.Column width={4} verticalAlign="middle">
              <Image src={thomas} size="medium" circular />
            </Grid.Column>
            <Grid.Column
              width={12}
              verticalAlign="middle"
              className="about-section3-column"
            >
              <Segment className="about-section3-segment about-section3-name">
                PICANDET Thomas
              </Segment>
              <Segment className="about-section3-segment about-section3-job">
                Responsable Technique
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="about-section3-row5">
            <Grid.Column width={4} verticalAlign="middle">
              <Image src={fred} size="medium" circular />
            </Grid.Column>
            <Grid.Column
              width={12}
              verticalAlign="middle"
              className="about-section3-column"
            >
              <Segment className="about-section3-segment about-section3-name">
                NIGON Frédéric
              </Segment>
              <Segment className="about-section3-segment about-section3-job">
                Responsable Logistique
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="about-section3-row6">
            <Grid.Column width={4} verticalAlign="middle">
              <Image src={margaux} size="medium" circular />
            </Grid.Column>
            <Grid.Column
              width={12}
              verticalAlign="middle"
              className="about-section3-column"
            >
              <Segment className="about-section3-segment about-section3-name">
                PIQUELLE Margaux
              </Segment>
              <Segment className="about-section3-segment about-section3-job">
                Responsable Communication
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </section>
      <section className="about-section4">
        <h2 className="about-section4-title">Rapports moraux</h2>
        <p className="about-section4-adobe">
          Pour lire les pdf, vous pouvez télécharger
          <a href="https://get.adobe.com/fr/reader/">acrobat reader</a>
        </p>
        <div className="about-section4-report">
          <Select
            placeholder="Année"
            options={listYear}
            className="about-section4-year"
          />
          <button type="button" className="about-section4-button-report">
            Voir le rapport financier 2022
          </button>
        </div>
        <h2 className="about-section4-title">Rapports des activités</h2>
        <p className="about-section4-adobe">
          Pour lire les pdf, vous pouvez télécharger
          <a href="https://get.adobe.com/fr/reader/">acrobat reader</a>
        </p>
        <div className="about-section4-report">
          <Select
            placeholder="Année"
            options={listYear}
            className="about-section4-year"
          />
          <button type="button" className="about-section4-button-report">
            Voir le rapport d&apos;activité 2022
          </button>
        </div>
        <h2 className="about-section4-title">Rapports financiers</h2>
        <p className="about-section4-adobe">
          Pour lire les pdf, vous pouvez télécharger
          <a href="https://get.adobe.com/fr/reader/">acrobat reader</a>
        </p>
        <div className="about-section4-report">
          <Select
            placeholder="Année"
            options={listYear}
            className="about-section4-year"
          />
          <button type="button" className="about-section4-button-report">
            Voir le rapport financier 2022
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUS;
