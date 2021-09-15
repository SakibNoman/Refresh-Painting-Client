const API_URL = 'https://morning-escarpment-96840.herokuapp.com/';

export const getOrderList = async () => {
    const res = await fetch(API_URL + 'orders');
    return await res.json();
}

export const changeOrderStatus = async (id, eventValue) => {

    const res = await fetch(API_URL + 'updateStatus/' + id, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventValue)
    })
    return await res.json()
}