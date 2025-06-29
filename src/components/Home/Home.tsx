import { useEffect } from 'react';
import confetti from 'canvas-confetti';

import Header from '../Header/Header';
import SliderManifestations from './SliderManifestations';
import Presentation from './Presentation';
import SubventionPartners from './SubventionPartners';
import Footer from '../Footer/Footer';

const Home = () => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <>
      <Header />
      <SliderManifestations />
      <Presentation />
      <SubventionPartners />
      <Footer />
    </>
  );
};

export default Home;
