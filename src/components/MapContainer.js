import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import pin from '../assets/map-pin.png';

const MapContainer = ({ cardClicked, truck, truckList, updateModal, updateCurrentTruck }) => {

  const locations = [
    {
      location: {
        lat: truck.latitude,
        lng: truck.longitude
      }
    }
  ];

  const createLocations = (list) => {
    const locations = [];

    for (let i = 0; i < list.length; i++) {
      const locationObj = {
        location: {
          lat: list[i].latitude,
          lng: list[i].longitude
        },
        truck: list[i]
      }
      locations.push(locationObj);
    }
    return locations;
  }

  const handlePinClick = (truck) => {
    updateModal(true);
    updateCurrentTruck(truck)
  }

  return (
    (!cardClicked ? <div id="mapPlaceholder">click a location card to load a map</div> :
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}>
        <GoogleMap id="googleMap"
          icon={pin}
          zoom={13}
          center={locations[0].location}>
          {createLocations(truckList).map((item, i) => {
            return <Marker position={item.location} key={i}
              onClick={() => handlePinClick(item.truck)} />
          })}
        </GoogleMap>
      </LoadScript>)
  );
};

export default MapContainer;