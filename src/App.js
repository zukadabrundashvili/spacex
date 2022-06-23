import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ShipmentList from "./ShipmentList";
import ShipmentDetails from "./ShipmentDetails";
import ShipmentSearch from "./ShipmentSearch";

function App() {
  const [selectedShipment, setSelectedShipment] = useState(null);

  return (
    <div className="App">
      {ShipmentList({ setSelectedShipment })}
      {ShipmentDetails({ shipment: selectedShipment, setSelectedShipment })}
    </div>
  );
}

export default App;
