import TruckListEntry from './TruckListEntry.js';

const TruckList = ( { truckList } ) => {

  return (
    <div>
      {truckList.map((truck, index) =>
        <TruckListEntry truck={truck} key={index} />
      )}
    </div>
  )
}

export default TruckList;