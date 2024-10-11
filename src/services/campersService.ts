import axios from 'axios';

const API_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const getCampers = () => axios.get(API_URL);
export const getCamperById = (id: string) => axios.get(`${API_URL}/${id}`);
