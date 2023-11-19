import { createReducer } from '@reduxjs/toolkit';
import { actionToggleIsOpenModalLogin } from '../actionscreator';

const initialState = {
  isOpenModalLogin: false,
};

const modalReducer = createReducer(initialState, (builder) => {
  builder.addCase(actionToggleIsOpenModalLogin, (state) => {
    state.isOpenModalLogin = !state.isOpenModalLogin;
  });
});

export default modalReducer;
