import React, { useState } from 'react';
import HotelRoom from '../HotelRoom/HotelRoom';
import hotelData from '../../tourData/hotelData';
import './StayInfo.css';


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import tourData from '../../../tourData/tourData';
// import Places from '../../Places/Places';
// import './Home.css';












const StayInfo = () => {
    const frist3 =  hotelData.slice(0,3);
    const [roomes, setRooms] = useState(frist3);
    return (
        <div className="container">
            <div className="hotel-info">
                 <h4>Stay in Cox's Bazer</h4>
                 {
                    roomes.map(room => <HotelRoom key={room.id } room={room}></HotelRoom>)
                }
            </div>
            <div className="map-info">

            </div>
        </div>
    );
};

export default StayInfo;