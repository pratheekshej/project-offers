import React from 'react';
import './card.styles.scss';
import placeholderImg from '../../../assets/c-wire-1.jpg';

const CardComponent = (props) => {
    const {
        id,
        image,
        name,
        price
    } = props;

    const defaultImg = (
        <img
            data-testid={`default-img-${id}`}
            id={id}
            src={placeholderImg}
            className="card-image"
            alt='No_Image' />
    );

    const imageRenderer = () => {
        if (image) {
            return (
                <img
                    data-testid={`original-img-${id}`}
                    id={id}
                    src={image}
                    className="card-image"
                    alt='No_Image'
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = placeholderImg;
                    }} />
            );
        }
        return defaultImg;
    }

    return (
        <div className='card-wrapper' data-testid={`card-${id}`}>
            {imageRenderer()}
            <div className='card-short-details'>
                <div className='card-name' data-testid={`name-${id}`}>{name}</div>
                <div className='card-price' data-testid={`price-${id}`}>{price}</div>
            </div>
        </div>
    );
};

export default CardComponent;
