import rio from '../assets/rioseo-logo.png';
import location from '../assets/location-icon.png';

const Nav = () => {

  return (
    <div id="nav">
      <img id="rioLogo" src={rio} alt="rio logo"></img>
      <div id="menuLocator">
      <h6 id="navMenu" >Menu</h6>
      <h6 id="navLocator" ><img src={location} alt="locationPin"></img>Truck Locator</h6>
      </div>
    </div>
  );
};

export default Nav;