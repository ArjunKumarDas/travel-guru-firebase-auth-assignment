import React, { useState } from 'react';
import HotelRoom from '../HotelRoom/HotelRoom';
import hotelData from '../../tourData/hotelData';
import './StayInfo.css';
import GoogleMap from '../GoogleMap/GoogleMap';


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
              <GoogleMap></GoogleMap>
            </div>
        </div>
    );
};

export default StayInfo;