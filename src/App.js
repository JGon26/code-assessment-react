import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

  const [truckList, updateTruckList] = useState([]);

  useEffect(()=> {
    axios({
      method: 'get',
      url: 'https://my.api.mockaroo.com/locations.json?key=a45f1200'
    })
      .then((result) => updateTruckList(result.data))
  }, []);

  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;