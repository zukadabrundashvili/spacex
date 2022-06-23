import "./shipments.css";

const getBays = (boxes) => {
  if (boxes) {
    const boxesNumber = boxes.split(",").length;
    return Math.round(boxesNumber / 2);
  }
  return 0;
};

export default function ShipmentDetails({ shipment, setSelectedShipment }) {
  return (
    <div className="shipment-details">
      {shipment ? (
        <>
          <h3>{shipment.name}</h3>
          <p>{shipment.email}</p>
          <p>Boxes: {shipment.boxes}</p>
          <input
            type="text"
            id="boxes"
            placeholder="Boxes"
            key={shipment.id}
            defaultValue={shipment.boxes}
            onChange={(e) => {
              setSelectedShipment({ ...shipment, boxes: e.target.value });
            }}
          ></input>
          <p>{getBays(shipment.boxes)} bays</p>
        </>
      ) : null}
    </div>
  );
}
