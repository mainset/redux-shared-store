import {
  FETCH_WELCOME_DATA,
  FETCH_WELCOME_DATA_SUCCESS,
  FETCH_WELCOME_DATA_ERROR,
} from './constants';

export const fetchWelcomeData = () => ({
  type: FETCH_WELCOME_DATA,
});

export const fetchWelcomeSuccess = (data) => ({
  type: FETCH_WELCOME_DATA_SUCCESS,
  data,
});

export const fetchWelcomeError = (error) => ({
  type: FETCH_WELCOME_DATA_ERROR,
  error,
});
