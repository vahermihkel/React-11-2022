import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from "./pages/Avaleht";
import Ostukorv from "./pages/Ostukorv";
import LisaToode from "./pages/LisaToode";
import HaldaTooteid from "./pages/HaldaTooteid";
import MuudaToode from "./pages/MuudaToode";
import Poed from "./pages/Poed";
import Seaded from "./pages/Seaded";
import YksikToode from "./pages/YksikToode";
import Meist from './pages/Meist';
import Tooted from './pages/Tooted';
import Albums from './pages/Albums';
import Coop from './pages/Coop';

// KUI midagi ei tööta, on 2 kohta mida vaadata:

// kompileerimise errorid
// must/hall taust, kus on kirjeldatud mis on viga
// 1. kus npm start töötab

// runtime errorid
// leht on üleni valge
// 2. parem klõps lehel -> inspect -> console

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>
      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>
      <Link to="/ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>
      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>
      <Link to="/halda">
        <button className="nupp">Toodeid haldama</button>
      </Link>
      <Link to="/poed">
        <button className="nupp">Meie poed</button>
      </Link>
      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>
      <Link to="/meist">
        <button className="nupp">Meist</button>
      </Link>
      <Link to="/albumid">
        <button className="nupp">Albumid</button>
      </Link>
      <Link to="/coop">
        <button className="nupp">Coop tooted</button>
      </Link>

      <Routes>
        {/* err.ee   --->     Avaleht.js sisu */}
          <Route path="" element={ <Avaleht /> } />
          <Route path="tooted" element={ <Tooted /> } />
          <Route path="ostukorv" element={ <Ostukorv /> } />
          <Route path="lisa-toode" element={ <LisaToode /> } />
          <Route path="halda" element={ <HaldaTooteid /> } />
          <Route path="muuda/:j2rjekorraNumber" element={ <MuudaToode /> } />
          <Route path="poed" element={ <Poed /> } />
          <Route path="seaded" element={ <Seaded /> } />
          <Route path="toode/:index" element={ <YksikToode /> } />
          <Route path="meist" element={ <Meist /> } />
          <Route path="albumid" element={ <Albums /> } />
          <Route path="coop" element={ <Coop /> } />
      </Routes>


    </div>
  );
}

export default App;
