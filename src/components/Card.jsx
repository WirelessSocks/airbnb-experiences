import React from 'react';

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.img} alt="zaferes photo" className='card--img'/>
            <div className='card--stats'>
                <img src="Star_icon.png" alt="staricon" className='card--star' />
                <span>{props.rating}</span>
                <span className='gray'>({props.reviewCount}) •</span>
                <span className='gray'>{props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    );
}