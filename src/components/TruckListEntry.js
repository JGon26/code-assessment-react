import phone from '../assets/phone-icon.png'

const TruckListEntry = ({ truck, updateCardClicked, updateCurrentTruck }) => {

  const handleCardCLick = () => {
    updateCardClicked(true);
    updateCurrentTruck(truck);
  };

  const openMapTab = () => {
    let address = truck.address.split(" ");
    let city = truck.city.split(" ");

    if (city.length > 1) {
      city = `${city[0]}+${city[1]}`
    };

    window.open(`https://www.google.com/maps/dir/?api=1&destination=
    ${address[0]}+${address[1]}+${address[2]}%2C+${city}%2C+${truck.state}`);
  };

  return (
    <div id="truckCard" onClick={() => handleCardCLick()}>
      <h3 className="truckCardInfo" id="truckName">{truck.name}</h3>
      <h4 className="truckCardInfo" id="truckAddress">{truck.address}</h4>
      <h4 className="truckCardInfo" id="truckLocation">
        {truck.city}, {truck.state} {truck.postal_code}</h4>
      <h4 className="truckCardInfo" id="truckDayClose" style={{ color: "green" }}>
        Open today until 9pm</h4>
      <h4 className="truckCardInfo" id="truckNumber" style={{ color: "orange" }}>
        <img src={phone} alt='phone icon' />111-222-3333</h4>
      <div id="truckCardBtnContainer">
        <button onClick={() => openMapTab()} className="truckCardBtn" id="truckDirections">DIRECTIONS
        </button>
        <button className="truckCardBtn" id="truckMoreInfo">MORE INFO</button>
      </div>
    </div>
  );
};

export default TruckListEntry;