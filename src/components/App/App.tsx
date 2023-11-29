import { Route, Routes } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import AboutUS from '../AboutUs/AboutUs';
import Agenda from '../Agenda/Agenda';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qui-sommes-nous" element={<AboutUS />} />
        <Route path="/agenda" element={<Agenda />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
