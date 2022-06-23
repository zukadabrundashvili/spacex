import "./shipments.css";
import ShipmentSearch from "./ShipmentSearch";
import { useEffect, useState } from "react";

export default function ShipmentList({ setSelectedShipment }) {
  const [shipments, setShipments] = useState([]);
  const [filteredShipments, setFilteredShipments] = useState([]);

  const loadShipments = () => {
    fetch("https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json")
      .then((response) => response.json())
      .then((data) => {
        setShipments(data);
        setFilteredShipments(data);
        setSelectedShipment(data[0]);
      });
  };
  useEffect(() => {
    loadShipments();
  }, []);

  return (
    <div className="shipment-list">
      {ShipmentSearch({ shipments, setFilteredShipments })}
      {filteredShipments.map((shipment) => (
        <div className="shipment" key={shipment.id} onClick={() => setSelectedShipment(shipment)}>
          <h3>{shipment.name}</h3>
        </div>
      ))}
    </div>
  );
}
