import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';

function TrailerCard({ trailers }) {

    const [showReview, setShowReview] = useState(false)

    function handleClick() {
        console.log('Clicked')
        setShowReview(!showReview)
    }
    
    return (
        <li className='card-item'>
            <div className='trailer-card' style={{  cursor: 'pointer', width: '18rem' }}>
                <img onClick={handleClick} className='card-image' variant="top" src={trailers.image} height='200px' width='225px'/>
                <h2 className='card-name'>{trailers.name}</h2>
                {showReview ? <p className='card-review'>Review: {trailers.review}</p> : ''}
                <ListGroup.Item className='card-price'>Price: {trailers.for_sale ? "$" + trailers.price : "Not For Sale"}</ListGroup.Item>
                <ListGroup.Item className='location'>{trailers.location}</ListGroup.Item>
            </div>
        </li>
    )
}

export default TrailerCard;