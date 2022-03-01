import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import pin from '../assets/map-pin.png';

const MapContainer = ({ cardClicked, truck }) => {

  // const mapStyles = {
  //   height: "80vh",
  //   width: "100%",
  //   grid-column-start: 1;
  // grid-row-start: 1;
  // };

  const locations = [
    {
      location: {
        lat: truck.latitude,
        lng: truck.longitude
      }
    }
  ];

  return (
    (!cardClicked ? <div id="mapPlaceholder">click a location card to load a map</div> :
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API}>
        <GoogleMap id="googleMap"
          icon={pin}
          zoom={13}
          center={locations[0].location}>
          <Marker position={locations[0].location} />
        </GoogleMap>
      </LoadScript>)
  );
};

export default MapContainer;