import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TruckList from './components/TruckList.js';
import MapContainer from './components/MapContainer.js';
import Nav from './components/Nav.js';

const App = () => {

  const [truckList, updateTruckList] = useState([]);

  const [cardClicked, updateCardClicked] = useState(false);
  const [currentTruck, updateCurrentTruck] = useState([]);


  useEffect(()=> {
    axios({
      method: 'get',
      url: 'https://my.api.mockaroo.com/locations.json?key=a45f1200'
    })
      .then((result) => updateTruckList(result.data))
  }, []);

  return (
    <div className="App">
      <Nav />
      <div id="listMapContainer">
        <TruckList truckList={truckList} updateCardClicked={updateCardClicked} updateCurrentTruck={updateCurrentTruck} />
        <MapContainer cardClicked={cardClicked} truck={currentTruck} />
      </div>
    </div>
  );
}

export default App;
