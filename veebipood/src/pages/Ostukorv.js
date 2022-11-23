import { useState } from "react";

function Ostukorv() {
  const [ostukorv, muudaOstukorv] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);

  const kustuta = (index) => {
    ostukorv.splice(index,1);
    muudaOstukorv(ostukorv.slice());
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
  }

  const tyhjenda = () => {
    muudaOstukorv([]);
    localStorage.setItem("ostukorv", JSON.stringify([]));
  }

  const lisa = (toode) => {
    ostukorv.push(toode);
    muudaOstukorv(ostukorv.slice());
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
  }

  const ostukorviKogusumma = () => {
    let summa = 0;
    ostukorv.forEach(element => summa = summa + element.hind);
    return summa;
  }

  return ( 
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      {ostukorv.length === 0 && <div>Ostukorv on tühi</div>}
      {ostukorv.length === 1 && <div>Ostukorvis on 1 ese</div>}
      {ostukorv.length > 1 && <div>Ostukorvis on {ostukorv.length} eset</div>}
      {ostukorv.map((element, index) => 
        <div key={index}>
          <img src={element.pilt} alt="" />
          <div>{element.nimi}</div>
          <div>{element.hind} €</div>
          <div>{element.aktiivne + 0}</div>
          <button onClick={() => kustuta(index)}>x</button>
          <button onClick={() => lisa(element)}>+</button>
        </div>)} 
      <div>Ostukorvi kogusumma: {ostukorviKogusumma()} €</div>
    </div> );
}

export default Ostukorv;