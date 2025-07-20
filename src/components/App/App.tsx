import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import CallToActionMontacutaine from '../CallToActionMontacutaine/CallToActionMontacutaine';
import Agenda from '../Agenda/Agenda';
import PageTransition from './PageTransition';
import Manifestations from '../Manifestation/Manifestations';
import ContactForm from '../Contact/Contact';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qui-sommes-nous" element={<AboutUs />} />
        <Route
          path="/nous-avons-besoin-de-vous"
          element={<CallToActionMontacutaine />}
        />
        <Route
          path="/agenda"
          element={
            <PageTransition>
              <Agenda />
            </PageTransition>
          }
        />
        <Route
          path="/manifestations"
          element={
            <PageTransition>
              <Manifestations />
            </PageTransition>
          }
        />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
