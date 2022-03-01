

const Footer = ({ updateList, list }) => {

  const selectedStyle = {
    backgroundColor: "orange",
    color: "white"
  }

  return (
    <div>
      {list ?
      <div id="mobileFooter">
        <button id="listBtn" style={selectedStyle} onClick={() => updateList(true)}>List</button>
        <button id="mapBtn" onClick={() => updateList(false)}>Map</button>
      </div> :
      <div id="mobileFooter">
        <button id="listBtn" onClick={() => updateList(true)}>List</button>
        <button id="mapBtn" style={selectedStyle} onClick={() => updateList(false)}>Map</button>
      </div>
      }
    </div>
  )
}

export default Footer;