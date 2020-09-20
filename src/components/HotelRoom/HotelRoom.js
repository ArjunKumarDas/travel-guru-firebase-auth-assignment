import React from 'react';
import './HotelRoom.css'

const HotelRoom = (props) => {
    const {title, roomImg, capacity, rating, price} = props.room;
    return (
        <div className="room-info">
                   <div className="info">
                      <img src={roomImg} alt=""/>
                   </div>
            <div className="info">
                 <p>{title}</p>
                 <p>{capacity}</p>
                 <p>{rating}</p>
                 <p>{price}</p>
            </div>
        </div>
    );
};

export default HotelRoom;