import axios from 'axios';

export const ajax = async () => await axios.request().then(response => response.data);