import { request, setHeaders } from './commonServices';
import axios from 'axios';
import { BASE_URL } from '../../constants/appConstants';

export const signUp = async (payload) => {
  try {
    return await axios.post(BASE_URL + '/api/users/sign-up', payload);
  } catch (error) {
    return error;
  }
};
export const signIn = async (body) => {
  try {
    const response = await request('/api/users/log-in', 'POST', body);
    if (response?.metadata?.status === 'SUCCESS') {
      return response?.payload?.data;
    }
    return {};
  } catch (e) {
    return e;
  }
};
export const orderData = async (body) => {
  try {
    return await axios.post(BASE_URL + '/api/users/create-order', body, setHeaders());
  } catch (error) {
    return error;
  }
};

export const getUserOrder = async (email, orderType) => {
  try {
    return await axios.get(
      BASE_URL + `/api/users/get-employee-order?email=${email}&orderType=${orderType}`
    );
  } catch (error) {
    return error;
  }
};
export const updateOrder = async (newOrder) => {
  try {
    return await axios.post(
      BASE_URL + `/api/users/update-order-by-id/${newOrder._id}`,
      newOrder,
      setHeaders()
    );
  } catch (error) {
    return error;
  }
};
export const deleteOrder = async (id) => {
  try {
    return await axios.post(BASE_URL + `/api/users/delete-order/${id}`, id, setHeaders());
  } catch (error) {
    return error;
  }
};
export const getAllOrders = async (orderType) => {
  try {
    return await axios.get(BASE_URL + `/api/admin/get-available-orders/${orderType}`);
  } catch (error) {
    return error;
  }
};
