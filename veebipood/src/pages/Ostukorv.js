import { useState } from "react";

function Ostukorv() {
  const [ostukorv, muudaOstukorv] = useState(["Nobe", "Tesla", "BMW"]);

  const kustuta = (index) => {
    ostukorv.splice(index,1);
    muudaOstukorv(ostukorv.slice());
  }

  const tyhjenda = () => {
    muudaOstukorv([]);
  }

  const lisa = (toode) => {
    ostukorv.push(toode);
    muudaOstukorv(ostukorv.slice());
  }

  return ( 
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      {ostukorv.length === 0 && <div>Ostukorv on tühi</div>}
      {ostukorv.length === 1 && <div>Ostukorvis on 1 ese</div>}
      {ostukorv.length > 1 && <div>Ostukorvis on {ostukorv.length} eset</div>}
      {ostukorv.map((element, index) => 
        <div key={index}>
          {element}
          <button onClick={() => kustuta(index)}>x</button>
          <button onClick={() => lisa(element)}>+</button>
        </div>)} 
    </div> );
}

export default Ostukorv;