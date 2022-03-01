import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TruckList from './components/TruckList.js';
import MapContainer from './components/MapContainer.js';
import Nav from './components/Nav.js';
import MoreInfoModal from './components/MoreInfoModal.js';
import Footer from './components/Footer.js';

const App = () => {

  const [truckList, updateTruckList] = useState([]);
  const [cardClicked, updateCardClicked] = useState(false);
  const [currentTruck, updateCurrentTruck] = useState([]);
  const [modal, updateModal] = useState(false);
  const [windowWidth, updateWindowWidth] = useState(0);
  const [list, updateList] = useState(true);


  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://my.api.mockaroo.com/locations.json?key=a45f1200'
    })
      .then((result) => updateTruckList(result.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () =>
      window.removeEventListener("resize", updateDimensions);

  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth
    updateWindowWidth(width);
  }

  return (
    (windowWidth > 900 ? <div className="App">
      <Nav list={list} windowWidth={windowWidth} />
      <h1 id="truckCount" >Found {truckList.length} trucks near you</h1>
      <div id="listMapContainer">
        <TruckList truckList={truckList} updateCardClicked={updateCardClicked}
          updateCurrentTruck={updateCurrentTruck} updateModal={updateModal}
          cardClicked={cardClicked} />
        <div id="mapContainer">
          <MapContainer cardClicked={cardClicked} truck={currentTruck}
            truckList={truckList} updateModal={updateModal} updateCurrentTruck={updateCurrentTruck} />
          <MoreInfoModal truck={currentTruck} showModal={modal} updateModal={updateModal}
            windowWidth={windowWidth} />
        </div>
      </div>
    </div> :
      <div className="App">
        <Nav windowWidth={windowWidth} list={list} />
        {list ?
          <div id="mobileContent">
            <TruckList truckList={truckList} updateCardClicked={updateCardClicked}
              updateCurrentTruck={updateCurrentTruck} updateModal={updateModal}
              cardClicked={cardClicked} />
            <MoreInfoModal truck={currentTruck} showModal={modal} updateModal={updateModal} windowWidth={windowWidth} />
          </div>
          :
          <div id="mobileContent">
            <MapContainer cardClicked={cardClicked} truck={currentTruck}
              truckList={truckList} updateModal={updateModal} updateCurrentTruck={updateCurrentTruck} />
            <MoreInfoModal truck={currentTruck} showModal={modal} updateModal={updateModal} windowWidth={windowWidth} />
          </div>
        }
        <Footer updateList={updateList} list={list} />
      </div >
    )
  );
}

export default App;
