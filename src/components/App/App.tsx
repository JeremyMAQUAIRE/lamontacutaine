import { Route, Routes } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import AboutUS from '../AboutUs/AboutUs';
import Agenda from '../Agenda/Agenda';
import EventDetail from '../Agenda/EventDetails/EventDetails';
import ContactUs from '../ContactUs/ContactUs';

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
