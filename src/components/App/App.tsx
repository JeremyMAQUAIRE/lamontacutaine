import { Route, Routes } from 'react-router-dom';

import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/qui-sommes-nous" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
