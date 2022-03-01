import x from '../assets/x-mark.png';
import landscape from '../assets/landscape-placeholder.png';
import phone from '../assets/phone-icon.png';
import car from '../assets/direction-icon.png';

const MoreInfoModal = ({ truck, showModal, updateModal }) => {

  const handleCloseModal = () => {
    updateModal(false);
  }

  const handleFullDetails = (truck) => {
    window.open(truck.url)
  }

  const handleHours = (truck) => {
    let dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday'];

    let html = '';
    let hourHtml = '';

    for (var i = 0; i < dayArray.length; i++) {
      let day = dayArray[i].toString();
      let openKey = '' + day.toLowerCase() + '_open'
      let closeKey = '' + day.toLowerCase() + '_close'
      html += `<h5 id="days" id="modal${day}">${day}</h5>`
      hourHtml += `<h5 id="hours" id="modal${day}Hours">${truck[openKey]} - ${truck[closeKey]}</h5>`
    }

    return (<div id="modalDayHoursBox"><div id="modalDayBox" dangerouslySetInnerHTML={{ __html: html }} />
      <div id="modalHourBox" dangerouslySetInnerHTML={{ __html: hourHtml }} /> </div>);
  }

  return (
    (!showModal ? <></> :
      <div id="moreInfoModal">
        <div id="modalContent">
          <img id="xMark" src={x} alt="x-mark" onClick={() => handleCloseModal()}></img>
          <img id="landscape" src={landscape} alt="landscape" ></img>
          <h3 id="modalTruckName">{truck.name}</h3>
          <h5 id="modalTruckAddress">{truck.address}</h5>
          <h5 id="modalTruckCity">{truck.city}, {truck.state} {truck.postal_code}</h5>
          <div id="modalTruckNum">
            <img src={phone} alt='phone icon' />
            <h5 id="truckNum">111-222-3333</h5>
          </div>
          <div id="modalTruckDirections">
            <img src={car} alt='phone icon' />
            <h5 id="directions" >Get Directions</h5>
          </div>
          {handleHours(truck)}
          <button id="fullDetailsBtn" onClick={() => handleFullDetails(truck)}>VIEW FULL DETAILS</button>

        </div>
      </div>
    )
  )
};

export default MoreInfoModal;