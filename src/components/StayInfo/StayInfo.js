import React, { useState } from 'react';
import './StayInfo.css'
import HotelRoom from '../HotelRoom/HotelRoom';
import hotelData from '../../tourData/hotelData';
import GoogleMap from '../GoogleMap/GoogleMap';
const StayInfo = () => {
    const frist3 =  hotelData.slice(0,3);
    const [roomes, setRooms] = useState(frist3);
    return (
        <div className=" container hotel-map">
           <div className="hotel-part">
              <h3 className="tittle">Stay in Cox's Bazer</h3>
                <>
                   {
                    roomes.map(room => <HotelRoom key={room.id } room={room}></HotelRoom>)
                   }
                </>
           </div>
           <div className="map-part">
                <GoogleMap></GoogleMap>
           </div>
        </div>
    );
};

export default StayInfo;



