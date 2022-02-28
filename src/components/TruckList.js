import TruckListEntry from './TruckListEntry.js';

const TruckList = ({ truckList, updateCardClicked, updateCurrentTruck }) => {

  return (
    <div id="truckListContainer">
      {truckList.map((truck, index) =>
        <TruckListEntry truck={truck} key={index} updateCardClicked={updateCardClicked}
          updateCurrentTruck={updateCurrentTruck} />
      )}
    </div>
  );
};

export default TruckList;