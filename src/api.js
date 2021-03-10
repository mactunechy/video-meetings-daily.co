
const API_KEY = 'bbaaa754868d1dc7bcd48f3cebac5131c2187ef44e4edeed65672d4a8364f549'

const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${API_KEY}` }
};

const baseURL = 'https://api.daily.co/v1'


export const createRoom = (data) => fetch(baseURL + '/rooms', { ...options, method: 'POST', body: JSON.stringify(data) })
    .then(response => response.json())
    .catch(err => console.error(err));

export const getRooms = () => fetch(baseURL + '/rooms', options)
    .then(response => response.json())
    .catch(err => console.error(err));