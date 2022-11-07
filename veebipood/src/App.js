import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from "./pages/Avaleht";
import Ostukorv from "./pages/Ostukorv";
import LisaToode from "./pages/LisaToode";

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

      <Link to="/ostukorv">
        <button className="nupp">Ostukorvi</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Toodet lisama</button>
      </Link>

      <Routes>
        {/* err.ee   --->     Avaleht.js sisu */}
          <Route path="" element={ <Avaleht /> } />
          <Route path="ostukorv" element={ <Ostukorv /> } />
          <Route path="lisa-toode" element={ <LisaToode /> } />
      </Routes>


    </div>
  );
}

export default App;
