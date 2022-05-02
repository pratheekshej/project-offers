import React from 'react';
import './card.styles.scss';
import placeholderImg from '../../../assets/c-wire-1.jpg';

const CardComponent = (props) => {
    const {
        image,
        name,
        price
    } = props;

    const defaultImg = (
        <img
            id={name}
            src={placeholderImg}
            className="card-image"
            alt='No_Image'
            loading='lazy' />
    );

    const imageRenderer = () => {
        if (image) {
            return (
                <img
                    id={name}
                    src={image}
                    className="card-image"
                    alt='No_Image'
                    loading='lazy'
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = placeholderImg;
                    }} />
            );
        }
        return defaultImg;
    }

    return (
        <div className='card-wrapper'>
            {imageRenderer()}
            <div className='card-short-details'>
                <div className='card-name'>{name}</div>
                <div className='card-price'>{price}</div>
            </div>
        </div>
    );
};

export default CardComponent;
