import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import sponsorpetitmarche from '../../assets/image/sponsors/auPetitMarche.png';
import sponsormousset from '../../assets/image/sponsors/boulangerieMousset.png';
import sponsorsauvanet from '../../assets/image/sponsors/etsSauvanet.png';
import sponsorprieur from '../../assets/image/sponsors/garageDuPrieure.png';
import sponsoridselec from '../../assets/image/sponsors/isdElec.png';
import sponsorjeremydev from '../../assets/image/sponsors/jeremyDev63.png';
import sponsorlecoqdor from '../../assets/image/sponsors/leCoqDOr.png';
import sponsorrestaurantlaposte from '../../assets/image/sponsors/restaurantDeLaPoste.png';

import './Footer.scss';

function Footer() {
  return (
    <div className="footer-content">
      <Grid
        container
        columns={5}
        doubling
        stackable
        className="footer-container-link"
      >
        <Grid.Column className="footer-link" id="footer-link">
          <a className="link-a-footer" href="/contactez-nous">
            Contactez-nous
          </a>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <Link className="link-a-footer" to="/laissez-nous-un-commentaire">
            Laissez-nous un commentaire
          </Link>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <button type="button" className="link-a-footer button-footer">
            S&apos;abonner à la newsletter
          </button>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <a className="link-a-footer" href="/cgu">
            Politiques de confidentialité
          </a>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <a className="link-a-footer" href="/mentions-legales">
            Mentions légales
          </a>
        </Grid.Column>
      </Grid>
      <Grid container columns={4} className="footer-container-sponsor">
        <Grid.Column className="footer-link" id="footer-link">
          <a className="footer-sponsor" href="test">
            <Image className="footer-image" src={sponsorpetitmarche} />
          </a>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <a className="footer-sponsor" href="test">
            <Image className="footer-image" src={sponsormousset} />
          </a>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <a className="footer-sponsor" href="test">
            <Image className="footer-image" src={sponsorsauvanet} />
          </a>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <a className="footer-sponsor" href="test">
            <Image className="footer-image" src={sponsorprieur} />
          </a>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <a className="footer-sponsor" href="test">
            <Image className="footer-image" src={sponsoridselec} />
          </a>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <a className="footer-sponsor" href="test">
            <Image className="footer-image" src={sponsorjeremydev} />
          </a>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <a className="footer-sponsor" href="test">
            <Image className="footer-image" src={sponsorlecoqdor} />
          </a>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <a className="footer-sponsor" href="test">
            <Image className="footer-image" src={sponsorrestaurantlaposte} />
          </a>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Footer;