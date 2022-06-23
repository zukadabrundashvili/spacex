export default function ShipmentSearch({ shipments, setFilteredShipments }) {
  return (
    <div className="shipment-search">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setFilteredShipments(shipments.filter((shipment) => shipment.name.toLowerCase().includes(e.target.value.toLowerCase())))}
      />
    </div>
  );
}
