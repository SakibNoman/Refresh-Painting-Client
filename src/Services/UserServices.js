const API_URL = 'https://morning-escarpment-96840.herokuapp.com/';

export const getPaintingServices = async () => {
    const res = await fetch(API_URL + 'services');
    return await res.json();
}

export const getReviews = async () => {
    const res = await fetch(API_URL + 'reviews');
    return await res.json();
}