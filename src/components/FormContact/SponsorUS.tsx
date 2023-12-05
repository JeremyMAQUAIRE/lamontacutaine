import { Image } from 'semantic-ui-react';

import sponsorpetitmarche from '../../assets/image/sponsors/auPetitMarche.png';
import sponsormousset from '../../assets/image/sponsors/boulangerieMousset.png';
import sponsorprieur from '../../assets/image/sponsors/garageDuPrieure.png';
import sponsoridselec from '../../assets/image/sponsors/isdElec.png';
import sponsorjeremydev from '../../assets/image/sponsors/jeremyDev63.png';
import sponsorrestaurantlaposte from '../../assets/image/sponsors/restaurantDeLaPoste.png';
import './FormContact.scss';

const SponsorUS = () => {
  return (
    <div className="sponsorUs-content">
      <Image src={sponsorpetitmarche} className="sponsorUs-image" />
      <Image src={sponsormousset} className="sponsorUs-image" />
      <Image src={sponsorprieur} className="sponsorUs-image" />
      <Image src={sponsoridselec} className="sponsorUs-image" />
      <Image src={sponsorjeremydev} className="sponsorUs-image" />
      <Image src={sponsorrestaurantlaposte} className="sponsorUs-image" />
    </div>
  );
};

export default SponsorUS;
