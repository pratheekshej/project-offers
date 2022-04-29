import React from 'react';
import './card.styles.scss';

const CardComponent = (props) => {
    const {
        image,
        name,
        price
    } = props;
    return (
        <div className='card-wrapper'>
            <img src={image} className="card-image" alt='No_Image' />
            <div className='card-name'>{name}</div>
            <div className='card-price'>{price}</div>
        </div>
    );
};

export default CardComponent;
