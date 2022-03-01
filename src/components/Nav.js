import rio from '../assets/rioseo-logo.png';
import location from '../assets/location-icon.png';

const Nav = () => {

  return (
    <div id="nav">
      <img id="rioLogo" src={rio} alt="rio logo"></img>
      <div id="menuLocator">
        <h6 id="navMenu" >Menu</h6>
        <div id="navLocator">
          <img src={location} alt="locationPin"></img>
          <h6 id="truckLocator">Truck Locator</h6>
        </div>
      </div>
    </div>
  );
};

export default Nav;