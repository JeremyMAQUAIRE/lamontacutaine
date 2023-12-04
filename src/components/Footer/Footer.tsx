import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { actionToggleIsOpenModalNewletter } from '../store/actionscreator';

import sponsorpetitmarche from '../../assets/image/sponsors/auPetitMarche.png';
import sponsormousset from '../../assets/image/sponsors/boulangerieMousset.png';
import sponsorprieur from '../../assets/image/sponsors/garageDuPrieure.png';
import sponsoridselec from '../../assets/image/sponsors/isdElec.png';
import sponsorjeremydev from '../../assets/image/sponsors/jeremyDev63.png';
import sponsorrestaurantlaposte from '../../assets/image/sponsors/restaurantDeLaPoste.png';
import NewletterModal from '../Modal/NewletterModal/NewletterModal';

import './Footer.scss';

function Footer() {
  const dispatch: AppDispatch = useDispatch();
  const handleOpenModalnewletter = () => {
    dispatch(actionToggleIsOpenModalNewletter());
  };
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
          <button
            type="button"
            onClick={handleOpenModalnewletter}
            className="link-a-footer button-footer"
          >
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
          <a
            className="footer-sponsor"
            href="https://www.facebook.com/aupetitmarchemontaigut"
            target="_blanck"
          >
            <Image className="footer-image" src={sponsorpetitmarche} />
          </a>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <a
            className="footer-sponsor"
            href="https://www.facebook.com/Boulangeriemousset"
            target="_blanck"
          >
            <Image className="footer-image" src={sponsormousset} />
          </a>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <a
            className="footer-sponsor"
            href="https://www.facebook.com/profile.php?id=100064014494320"
            target="_blanck"
          >
            <Image className="footer-image" src={sponsorprieur} />
          </a>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <a
            className="footer-sponsor"
            href="https://www.facebook.com/IDSElec63"
            target="_blanck"
          >
            <Image className="footer-image" src={sponsoridselec} />
          </a>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <a
            className="footer-sponsor"
            href="https://jeremy-dev63.fr/"
            target="_blanck"
          >
            <Image className="footer-image" src={sponsorjeremydev} />
          </a>
        </Grid.Column>
        <Grid.Column className="footer-link" id="footer-link">
          <a
            className="footer-sponsor"
            href="https://www.facebook.com/Das63700"
            target="_blanck"
          >
            <Image className="footer-image" src={sponsorrestaurantlaposte} />
          </a>
        </Grid.Column>
      </Grid>
      <NewletterModal />
    </div>
  );
}

export default Footer;
