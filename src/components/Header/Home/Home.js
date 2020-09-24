import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tourData from '../../../tourData/tourData';
import Places from '../../Places/Places';
import './Home.css';

const Home = () => {
  
  const frist3 =  tourData.slice(0,3);
//   console.log(frist3);
  const [places, setPlacecs] = useState(frist3);
    return (
        <div className="full-container">
             <div className="slect-place">
              <h1>Cox's Bazer</h1>
                <p>Coxs Bazar is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.Coxs Bazar town has an area of 6.85 km2 (2.64 sq mi), and is bounded by Bakkhali River on the north and East, Bay of Bengal in the West, and Jhilwanj Union in the south </p>
                <Link to="/booking"><button className="btn-booking">Booking</button></Link>
             </div>
             <div className="historical-place">
                {
                    places.map(placeName =>  <Link to="/booking"><Places key={placeName.id } placeName={placeName}></Places></Link>)
                }
               </div>
        </div>
    );
};

export default Home;

