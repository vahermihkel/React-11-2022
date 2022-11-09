import { useState } from "react";

// ffc
function Avaleht() {
  //let kogus = 5; // let tähendab et kuulutan välja uue muutuja ja võrdusmärgiga annan talle väärtuse
  //kogus = 4; // siin pöördun varasema muutuja poole ja annan talle uue väärtuse võrdusmärgi abil
  // semikoolon lõpus on vabatahtlik, see tähistab rea lõppu 
  //            (seda nõutakse ettevõtetes, enda projektides on viisakuse asi)
  const [kogus, uuendaKogus] = useState(5);
  const [sonum, uuendaSonum] = useState("");
  const [laigitud, uuendaLaigitud] = useState(false);

  console.log(kogus); // tekib selline kirje brauseri konsooli
                      // brauseris: parem hiireklõps lehel -> inspect -> console

  function vahenda() {
    // kogus = kogus - 1;
    uuendaKogus(kogus - 1);
    console.log(kogus);
    uuendaSonum("Kogus vähendatud");
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Kogus suurendatud");
  }

  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Kogus nullitud");
  }

  // tab nihutab paremale
  // shift + tab nihutab vasakule

  /* ctrl + ä ---> kommentaaride lisamine */
  /* loogelised sulud ja selle sees olev sõna on viide JavaScriptile */

  return ( 
    <div>
      {laigitud === false && <img onClick={() => uuendaLaigitud(true)} src="/mittelaigitud.svg" alt="" />}
      {laigitud === true && <img onClick={() => uuendaLaigitud(false)} src="/laigitud.svg" alt="" />}
      
      <div>-----------</div>
      <div>{sonum}</div>
      {/* <button hidden={kogus === 0} onClick={nulli}>Nulli tagasi</button> <br /> */}
      { kogus > 0 && <button onClick={nulli}>Nulli tagasi</button>}
      <br />
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <div>{kogus}</div>
      <button onClick={suurenda}>+</button>
      <div>Oled avalehel</div>
      <button>Nupp</button>
    </div>
    );
}

export default Avaleht;