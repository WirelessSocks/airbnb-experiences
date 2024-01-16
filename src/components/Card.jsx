import React from 'react';

export default function Card(props) {

    let badgeText;

    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online") {
        badgeText = "Online"
    }
    return (
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}

            <img
                src={props.coverImg} alt="card photo"
                className='card--img'
            />
            <div className='card--stats'>
                <img
                    src="Star_icon.png" alt="star-icon"
                    className='card--star'
                />
                <span>{props.stats.rating}</span>
                <span 
                className='gray'>({props.stats.reviewCount}) • 
                </span>
                <span className='gray'>{props.location}</span>
            </div>

            <h2 className='card--title'>
                {props.title}
            </h2>
            <p className='card--price'>
                <span className='bold'>From ${props.price}</span> / person
            </p>
        </div>
    );
}