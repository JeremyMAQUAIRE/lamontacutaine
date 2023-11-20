import { createReducer } from '@reduxjs/toolkit';
import {
  actionToggleIsOpenModalLogin,
  actionToggleIsOpenModalMenu,
} from '../actionscreator';

const initialState = {
  isOpenModalLogin: false,
  isOpenModalMenu: false,
};

const modalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionToggleIsOpenModalLogin, (state) => {
      state.isOpenModalLogin = !state.isOpenModalLogin;
    })
    .addCase(actionToggleIsOpenModalMenu, (state) => {
      state.isOpenModalMenu = !state.isOpenModalMenu;
    });
});

export default modalReducer;
