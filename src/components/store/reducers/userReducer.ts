import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  isConnected: false,
};

const userReducer = createReducer(initialState, (builder) => {});

export default userReducer;
