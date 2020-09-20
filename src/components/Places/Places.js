import React from 'react';
import './Places.css'

const Places = (props) => {
    const {place, img} = props.placeName;
    return (
        <div className="place-bg">
            <img className="img-radius" src={img} alt=""/>
            <br/>
            <h4 className="text-dark">{place}</h4>
        </div>
    );
};

export default Places;