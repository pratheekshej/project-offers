/* eslint-disable no-unused-vars */
export const APP_SER = {
    OFFER: (data) => {
        const { currency, value } = data['prices']['totalPrice']['amount'];
        const { imageUrl, name } = data?.carGroupInfo?.modelExample;
        return {
            image: imageUrl,
            images: data?.splashImages ? data?.splashImages : [],
            name,
            price: `${currency} ${value}`,
            ...data
        };
    }
}