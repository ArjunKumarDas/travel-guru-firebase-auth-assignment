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
             
            <Link to="/booking">
                <div className="historical-place">
                {
                    places.map(placeName => <Places key={placeName.id } placeName={placeName}></Places>)
                }
               </div>
            </Link>
        </div>
    );
};

export default Home;

