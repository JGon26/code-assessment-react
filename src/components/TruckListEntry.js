import phone from '../assets/phone-icon.png';

const TruckListEntry = ({ truck, updateCardClicked, updateCurrentTruck, updateModal, cardClicked }) => {

  const handleCardCLick = () => {
    updateModal(false);
    updateCardClicked(true);
    updateCurrentTruck(truck);
  };

  const handleMoreInfo = (e) => {
    e.stopPropagation();
    updateModal(true);
    updateCurrentTruck(truck);
    updateCardClicked(true);
  };

  const openMapTab = () => {
    const address = truck.address.split(" ");
    let city = truck.city.split(" ");

    if (city.length > 1) {
      city = `${city[0]}+${city[1]}`
    };

    window.open(`https://www.google.com/maps/dir/?api=1&destination=
    ${address[0]}+${address[1]}+${address[2]}%2C+${city}%2C+${truck.state}`);
  };

  const generateDay = (truck) => {
    const weekDay = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    const d = new Date();
    const day = weekDay[d.getDay()];

    return `Open today until ${truck[day + '_close']}`
  }

  return (
    <div id="truckCard" onClick={() => handleCardCLick()}>
      <h3 className="truckCardInfo" id="truckName">{truck.name}</h3>
      <h4 className="truckCardInfo" id="truckAddress">{truck.address}</h4>
      <h4 className="truckCardInfo" id="truckLocation">
        {truck.city}, {truck.state} {truck.postal_code}</h4>
      <h4 className="truckCardInfo" id="truckDayClose">
        {generateDay(truck)}</h4>
      <div className="truckCardInfo" id="truckNumber">
        <img id="phoneIcon" src={phone} alt='phone icon' />
        <h4 id="phoneNum" style={{ color: "orange" }}>111-222-3333</h4></div>
      <div id="truckCardBtnContainer">
        <button onClick={() => openMapTab()} className="truckCardBtn" id="truckDirections">DIRECTIONS
        </button>
        <button className="truckCardBtn" id="truckMoreInfo" onClick={(e) => handleMoreInfo(e)}>MORE INFO</button>
      </div>
    </div>
  );
};

export default TruckListEntry;