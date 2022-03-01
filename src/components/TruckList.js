import TruckListEntry from './TruckListEntry.js';

const TruckList = ({ truckList, updateCardClicked, updateCurrentTruck, updateModal }) => {

  return (
    <div id="truckListContainer">
      {truckList.map((truck, index) =>
        <TruckListEntry truck={truck} key={index} updateCardClicked={updateCardClicked} updateModal={updateModal}
          updateCurrentTruck={updateCurrentTruck} />
      )}
    </div>
  );
};

export default TruckList;