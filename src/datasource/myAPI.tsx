import axios from 'axios';
import { Shuttle } from '../models/Shuttle';


//base URL of your API
const BASE_URL = 'https://localhost:3030';

//--------------------------------SHUTTLE-------------------------------------------------
export const getShuttleData = async (): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/shuttle`);

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle errors and return an error object or re-throw the error
    throw error;
  }
};

export const updateShuttleData = async (data: Shuttle): Promise<any> => {
  try {
    const response = await axios.put(`${BASE_URL}/shuttle`, data);

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle errors and return an error object or re-throw the error
    throw error;
  }
};

//--------------------------------TRIP-------------------------------------------------
export const getTripData = async (): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/trip`);

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle errors and return an error object or re-throw the error
    throw error;
  }
};
export const createTripData = async (data: Shuttle): Promise<any> => {
  try {
    const response = await axios.put(`${BASE_URL}/trip`, data);

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle errors and return an error object or re-throw the error
    throw error;
  }
};

export const updateTripData = async (data: Shuttle): Promise<any> => {
  try {
    const response = await axios.put(`${BASE_URL}/trip`, data);

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle errors and return an error object or re-throw the error
    throw error;
  }
};
//--------------------------------BLDG-------------------------------------------------
export const getBldgData = async (): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/bldg`);

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle errors and return an error object or re-throw the error
    throw error;
  }
};
//--------------------------------ShuttleTrip-------------------------------------------------
export const getShuttleTripData = async (): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/shuttletrip`);

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle errors and return an error object or re-throw the error
    throw error;
  }
};