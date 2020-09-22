import React from 'react';
import { Link } from 'react-router-dom';
import './Booking.css';
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';

const Booking = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="full-container">
            <div className="booking-part">
                <h6>Orgin</h6>
                <input type="text" className="width" placeholder="Enter Your Orgin" />
                <h6>Destination</h6>
                <input type="text" className="width" placeholder="Enter Your Destination"/>
                <div className="calender">
                    <div className="from">
                        <h6>From</h6>
                        <p><ReactDatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        calendarClassName="rasta-stripes" /></p>
                    </div>
                    <div className="to">
                        <h6>To</h6>
                        <p><ReactDatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        calendarClassName="rasta-stripes" /></p>
                    </div>
                </div>
                <Link to="/stayinfo"><button className="button">Start Booking</button></Link>
            </div>
        </div>
    );
};

export default Booking;