import { request, setHeaders } from './commonServices';
import axios from 'axios';

export const signUp = async (body) => {
  try {
    const response = await request('/api/users/sign-up', 'POST', body);
    return response;
  } catch (e) {
    return e;
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
    return await axios.post(
      'https://lu-meal-stage.herokuapp.com/api/users/create-order',
      body,
      setHeaders()
    );
  } catch (error) {
    return error;
  }
};

export const getUserOrder = async (email, orderType) => {
  try {
    return await axios.get(
      `https://lu-meal-stage.herokuapp.com/api/users/get-employee-order?email=${email}&orderType=${orderType}`
    );
  } catch (error) {
    console.log(error);
  }
};
export const updateOrder = async (newOrder) => {
  try {
    return await axios.post(
      `https://lu-meal-stage.herokuapp.com/api/users/update-order-by-id/${newOrder._id}`,
      newOrder,
      setHeaders()
    );
  } catch (error) {
    console.log(error);
  }
};
export const deleteOrder = async (id) => {
  try {
    return await axios.post(
      `https://lu-meal-stage.herokuapp.com/api/users/delete-order/${id}`,
      id,
      setHeaders()
    );
  } catch (error) {
    console.log(error);
  }
};
export const getAllOrders = async (orderType) => {
  try {
    return await axios.get(
      `https://lu-meal-stage.herokuapp.com/api/admin/get-available-orders/${orderType}`
    );
  } catch (error) {
    console.log(error);
  }
};
