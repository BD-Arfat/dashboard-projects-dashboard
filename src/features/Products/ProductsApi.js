import axios from '../../Components/utils/axios';

export const getProducts = async () => {
    const res = await axios.get('/products');
    return res.data;
  }