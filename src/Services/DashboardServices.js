
const API_URL = 'https://morning-escarpment-96840.herokuapp.com/';
// const API_URL = 'http://localhost:5000/';
const token = {
    headers: {
        "x-access-token": localStorage.getItem('token')
    }
}

export const getOrderList = async () => {
    const res = await fetch(API_URL + 'orders', token);
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

export const makeAdmin = async (eventValue) => {
    const res = await fetch(API_URL + 'addAdmin', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(eventValue)
    })
    return await res.json()
}

export const manageService = async (id) => {
    return await fetch(API_URL + `deleteService/${id}`, {
        method: "DELETE"
    })
}

export const addService = async (eventValue) => {
    const res = await fetch(API_URL + 'addService', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(eventValue)
    })
    return await res.json()
}

export const imageUpload = async (imageData) => {
    const res = await fetch('https://api.imgbb.com/1/upload', {
        method: "POST",
        body: imageData
    })
    return await res.json()
}

export const getSingleService = async (id) => {
    return await fetch(API_URL + `singleService/${id}`)
}

export const addOrder = async (eventValue) => {
    return fetch(API_URL + 'addOrder', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(eventValue)
    })
}

export const getUserOrder = async (email) => {
    return await fetch(API_URL + `userOrder/${email}`)
}

export const addReview = async (eventValue) => {
    return fetch(API_URL + 'addReview', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(eventValue)
    })
}