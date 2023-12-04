import { Route, Routes } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import AboutUS from '../AboutUs/AboutUs';
import Agenda from '../Agenda/Agenda';
import EventDetail from '../Agenda/EventDetails/EventDetails';
import ContactUs from '../ContactUs/ContactUs';
import BuildPage from '../BuildPage/BuildPage';
import FormContact from '../FormContact/FormContact';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qui-sommes-nous" element={<AboutUS />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/evenement/:eventId" element={<EventDetail />} />
        <Route path="/nous-contacter" element={<ContactUs />} />
        <Route path="rejoignez-nous/contacter-nous" element={<FormContact />} />
        <Route
          path="/blog"
          element={<BuildPage message="Bientôt votre blog" />}
        />
        <Route
          path="/galerie"
          element={
            <BuildPage message="Bientôt la galerie photo et l'espace Presse" />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
