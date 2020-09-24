import React from 'react';
import { Link } from 'react-router-dom';
import './Booking.css';
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';

const Booking = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="full-container">
            <div className="about-place"> 
                <h1>Cox's Bazer</h1>
                <p>Coxs Bazar is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.Coxs Bazar town has an area of 6.85 km2 (2.64 sq mi), and is bounded by Bakkhali River on the north and East, Bay of Bengal in the West, and Jhilwanj Union in the south </p>
            </div>
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