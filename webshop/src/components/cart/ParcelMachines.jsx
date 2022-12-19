import { useEffect, useState } from "react"

const ParcelMachines = () => {
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => setParcelMachines(json));
  }, []);

  return (
    <select>
      {parcelMachines
        .filter(element => element.A0_NAME === "EE")
        .map(element => <option key={element.NAME}>{element.NAME}</option>)}
    </select>
  )
}

export default ParcelMachines