export const APP_SER = {
    OFFER: (data) => {
        const { currency, value } = data['prices']['totalPrice']['amount'];
        const { imageUrl, name } = data?.carGroupInfo?.modelExample;
        return {
            images: data?.splashImages ? data?.splashImages : [],
            image: imageUrl,
            name,
            price: `${currency} ${value}`,
            ...data
        };
    }
}