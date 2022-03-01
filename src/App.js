import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TruckList from './components/TruckList.js';
import MapContainer from './components/MapContainer.js';
import Nav from './components/Nav.js';
import MoreInfoModal from './components/MoreInfoModal.js';

const App = () => {

  const [truckList, updateTruckList] = useState([]);
  const [cardClicked, updateCardClicked] = useState(false);
  const [currentTruck, updateCurrentTruck] = useState([]);
  const [modal, updateModal] = useState(false);


  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://my.api.mockaroo.com/locations.json?key=a45f1200'
    })
      .then((result) => updateTruckList(result.data))
  }, []);

  return (
    <div className="App">
      <Nav />
      <h1 id="truckCount" >Found {truckList.length} trucks near you</h1>
      <div id="listMapContainer">
        <TruckList truckList={truckList} updateCardClicked={updateCardClicked}
        updateCurrentTruck={updateCurrentTruck} updateModal={updateModal}
        cardClicked={cardClicked}/>
        <div id="mapContainer">
          <MapContainer cardClicked={cardClicked} truck={currentTruck} />
          <MoreInfoModal truck={currentTruck} showModal={modal} updateModal={updateModal} />
        </div>
      </div>
    </div>
  );
}

export default App;
