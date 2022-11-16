import { useRef, useState } from "react";

// sort muudab järjekorda (a,b)
// filter vähendab       element
// map asendab igaüht (kogus jääb samaks)    element     (element,j2rjekorraNumber)

// splice(mitmendatKustutan, mituTükkiKustutan)
// poed.delete(j2rjekorraNumber)

function Poed() {
  // const poed = ["Kristiine", "Põhja-Tallinn", "Mustamäe", "Kesklinn", "Haabersti", "Õismäe"];
  const [poed, muudaPoed] = useState(["Kristiine", "Põhja-Tallinn", "Mustamäe", "Kesklinn", "Haabersti", "Õismäe", "Lasnamäe"]);

  const muudaTagasi = () => {
    muudaPoed(["Kristiine", "Põhja-Tallinn", "Mustamäe", "Kesklinn", "Haabersti", "Õismäe", "Lasnamäe"]);
  }

  const sorteeriAZ = () => {
    // poed.sort((a,b) => a.localeCompare(b));
    poed.sort();
    muudaPoed(poed.slice());
  }

  const sorteeriZA = () => {
    poed.sort();
    poed.reverse();
    // poed.sort((a,b) => b.localeCompare(a));        10 - 4 = 6            4 - 10      = -6
    // poed.sort((a,b) => -1 * a.localeCompare(b));                     -1 * (10 - 4)   = -6
    muudaPoed(poed.slice());
  }

  const sorteeriS6naJ2rgi = () => {
    poed.sort((a, b) => a.length - b.length);
    muudaPoed(poed.slice());
  }

  const filtreeri = () => {
    // poed.filter(element => element.includes("mäe"));
    const tagastus = poed.filter(element => element.endsWith("mäe"));
    muudaPoed(tagastus);
  }

  const filtreeriKellelITeine = () => {
    const tagastus = poed.filter(element => element.charAt(1) === "i");
    muudaPoed(tagastus);
  }

  const muudaIgaYht = () => {
    const tagastus = poed.map(element => "--" + element);
    muudaPoed(tagastus);
  }

  const muudaK6ikV2ikseks = () => {
    const tagastus = poed.map(element => element.toLowerCase());
    muudaPoed(tagastus);
  }

  // console.log("TEGIN HTMLI UUESTI");
  // const [test, uuendaTesti] = useState("Kapsas");

  const kustuta = (j2rjekorraNumber) => {
    poed.splice(j2rjekorraNumber,1);
    muudaPoed(poed.slice());
  }

  const poodViide = useRef(); // poodRef

  const lisaPood = () => {
    poed.push(poodViide.current.value);
    muudaPoed(poed.slice());
  }

  return ( 
    <div>
      {/* <button onClick={() => uuendaTesti("Kapsas")}>Kapsas</button>
      <button onClick={() => uuendaTesti("Porgand")}>Porgand</button>
      <button onClick={() => uuendaTesti("Kartul")}>Kartul</button>
      <div>{test}</div> */}
      <label>Uus pood</label>
      <input ref={poodViide} type="text" />
      <button onClick={lisaPood}>Sisesta</button>
      <br />
      <button onClick={muudaTagasi}>Muuda tagasi</button>
      <button onClick={sorteeriAZ}>Järjesta tähestiku alusel</button>
      <button onClick={sorteeriZA}>Järjesta Z-A</button>
      <button onClick={sorteeriS6naJ2rgi}>Sorteeri sõna pikkuse järgi</button>
      <button onClick={filtreeri}>Jäta alles vaid mäe-d sisaldavad</button>
      <button onClick={filtreeriKellelITeine}>Jäta alles vaid 'i' tähte teisena sisaldavad</button>
      <button onClick={muudaIgaYht}>Muuda igaüht</button>
      <button onClick={muudaK6ikV2ikseks}>Muuda kõik väikseks</button>
      { poed.map((yksPood, i) => 
        <div key={i}>
          {yksPood}
          <button onClick={() => kustuta(i)}>x</button>
        </div>) }
      <div>--------------------------------</div>
      <div>Kristiine</div>
      <div>Põhja-Tallinn</div>
      <div>Mustamäe</div>
      <div>Kesklinn</div>
      <div>Haabersti</div>
      <div>Õismäe</div>
      <div>Lasnamäe</div>
    </div> );
}

export default Poed;