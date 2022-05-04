import React, { useState, Fragment } from 'react';
import './card.styles.scss';
import fallBackImg from '../../../assets/c-wire-1.jpg';
import InLoader from '../loaders/component-loader/component-loader.component';

const CardComponent = (props) => {
    const {
        id,
        image,
        name,
        price
    } = props;

    const [imgLoaded, setImgLoaded] = useState(false);

    const defaultImg = (
        <img
            data-testid={`default-img-${id}`}
            id={id}
            src={fallBackImg}
            className="card-image"
            alt='No_Image' />
    );

    const imageRenderer = () => {
        if (image) {
            const imageStyle = !imgLoaded ? { display: "none" } : {};
            return (
                <Fragment>
                    {!imgLoaded && <InLoader loaderText="Loading image..." />}
                    <img
                        data-testid={`original-img-${id}`}
                        id={id}
                        src={image}
                        style={imageStyle}
                        className="card-image"
                        alt='No_Image'
                        onLoad={() => setImgLoaded(true)}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = fallBackImg;
                        }} />
                </Fragment>
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
