import React from 'react';
import './HotelRoom.css'


const HotelRoom = (props) => {
    const { title, roomImg, capacity, rating, price } = props.room;
    return (
      
            <div className="room-info">
                <div className="info">
                   <p > <img src={roomImg} alt="" /></p>
                </div>
                <div className="info-d">
                    <p className="title">{title}</p>
                    <p className="capacity">{capacity}</p>
                    <p className="rating">{rating} <span className="price">{price}</span></p>
                    
                </div>
            </div>
         
    );
};

export default HotelRoom;