import React from 'react';
import './Places.css'

const Places = (props) => {
    const {place, img} = props.placeName;
    return (
        <div className="place-bg">
            <img className="img-radius" src={img} alt=""/>
            <h4 className="text">{place}</h4>
        </div>
    );
};

export default Places;


