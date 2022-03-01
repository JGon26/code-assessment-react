import x from '../assets/x-mark.png';
import landscape from '../assets/landscape-placeholder.png';
import phone from '../assets/phone-icon.png';
import car from '../assets/direction-icon.png';

const MoreInfoModal = ({ truck, showModal, updateModal }) => {

  const handleCloseModal = () => {
    updateModal(false);
  }

  const handleHours = (truck) => {
    let dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday'];

    let html = '';

    for (var i = 0; i < dayArray.length; i++) {
      let day = dayArray[i].toString();
      let openKey = '' + day.toLowerCase() + '_open'
      let closeKey = '' + day.toLowerCase() + '_close'
      html += `<h6 className="modal${day}">${day}</h6><h6 className="modal${day}Hours">${truck[openKey]} - ${truck[closeKey]}</h6>`
    }

  return <div id="modalHourBox" dangerouslySetInnerHTML={{ __html: html }}/>;
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
          <h5 id="modalTruckNum" ><img src={phone} alt='phone icon' />111-222-3333</h5>
          <h5 id="modalTruckDirections" ><img src={car} alt='phone icon' />Get Directions</h5>
          {handleHours(truck)}

        </div>
      </div>
    )
  )
};

export default MoreInfoModal;