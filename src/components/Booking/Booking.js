import React from 'react';
import { Link } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    var today = new Date();
    var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    var calender = date;
    // document.getElementById("p1").innerHTML = calender;
    return (
        <div className="full-container">
            <div className="booking-part">
                    <h6>Orgin</h6>
                          <input type="text" className="width" />
                          <h6>Destination</h6>
                   <input type="text" className="width" />
                <div className="calender">
                    <div className="date">
                          <p>From</p>
                         {/* <input type="text" >{calender}</input> */}
                        <p>{calender}</p>
                    </div>
                    <div className="date">
                          <p>To</p>
                         <p>{calender}</p>
                    </div>
                </div>
                <Link to="/stayinfo"><button className="button">Start Booking</button></Link>
            </div>
        </div>
    );
};

export default Booking;