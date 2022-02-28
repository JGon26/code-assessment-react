

const TruckListEntry = ( { truck } ) => {

  return (
    <div id="truckCard">
      <h3 className="truckCardInfo" id="truckName">{truck.name}</h3>
      <h4 className="truckCardInfo" id="truckAddress">{truck.address}</h4>
      <h4 className="truckCardInfo" id="truckLocation">{truck.city}, {truck.state} {truck.postal_code}</h4>
      <h4 className="truckCardInfo" id="truckDayClose">Open today until 9pm</h4>
      <h4 className="truckCardInfo" id="truckNumber">111-222-3333</h4>
      <button className="truckCardBtn" id="truckDirections">DIRECTIONS</button>
      <button className= "truckCardBtn" id="truckMoreInfo">MORE INFO</button>
    </div>
  )
}

export default TruckListEntry;