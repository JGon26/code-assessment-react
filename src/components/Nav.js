import rio from '../assets/rioseo-logo.png';
import location from '../assets/location-icon.png';
import whiteLocation from '../assets/white-location-icon.png'
import rioMobileLogo from '../assets/rioseo-logo-mobile.png';
import hamburger from '../assets/hamburger.png';

const Nav = ({ list, windowWidth }) => {

  return (
    (windowWidth > 900 ?
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
      :
      <div id="phoneNav">
        <img id="hamburger" src={hamburger} alt="drop down"></img>
        <img id="rioLogoMobile" src={rioMobileLogo} alt="rio logo"></img>
        <img id="mobileLocation" src={whiteLocation} alt="locationPin" color="white"></img>
      </div>
    )
  );
};

export default Nav;