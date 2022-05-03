import { render, screen } from "@testing-library/react";
import CardComponent from "./card.component";

describe('Card Component', () => {
    test('card component render', () => {
        let offerData = {
            id: 1,
            image: 'https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/eb3c65f783b980c0929b5f4a20ad4f2640723126.jpeg',
            name: "Audi A3 Sedan - 1",
            price: 'EUR 209.96'
        };
        render(<CardComponent {...offerData} />);
        const cardElem = screen.getByTestId(`card-${offerData.id}`);
        expect(cardElem).toBeInTheDocument();
        expect(cardElem).toBeTruthy();
    });

    test('card component with valid image', () => {
        let offerData = {
            id: 2,
            image: 'https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/eb3c65f783b980c0929b5f4a20ad4f2640723126.jpeg',
            name: "Audi A3 Sedan - 2",
            price: 'EUR 209.96'
        };
        render(<CardComponent {...offerData} />);
        const cardElem = screen.queryByTestId(`original-img-${offerData.id}`);
        expect(cardElem).not.toBeUndefined();
    });

    test('card component with invalid or no image', () => {
        let offerData = {
            id: 3,
            image: 'https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/abc123def567ghi890.jpeg',
            name: "Audi A3 Sedan - 3",
            price: 'EUR 209.96'
        };
        render(<CardComponent {...offerData} />);
        const cardElem = screen.queryByTestId(`default-img-${offerData.id}`);
        expect(cardElem).not.toBeUndefined();
    });

    test('card component with name and price', () => {
        let offerData = {
            id: 4,
            image: 'https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/eb3c65f783b980c0929b5f4a20ad4f2640723126.jpeg',
            name: "Audi A3 Sedan - 3",
            price: 'EUR 209.96'
        };
        render(<CardComponent {...offerData} />);
        const cardElem = screen.getByTestId(`name-${offerData.id}`);
        const priceElem = screen.getByTestId(`price-${offerData.id}`);
        expect(cardElem).toBeInTheDocument();
        expect(priceElem).toBeInTheDocument();
        expect(cardElem).toHaveTextContent(offerData.name);
        expect(priceElem).toHaveTextContent(offerData.price);
    });
});