import { createReducer } from '@reduxjs/toolkit';
import {
  actionToggleIsOpenModalLogin,
  actionToggleIsOpenModalMenu,
  actionToggleIsOpenModalNewletter,
} from '../actionscreator';

const initialState = {
  isOpenModalLogin: false,
  isOpenModalMenu: false,
  isOpenModalNewletter: false,
};

const modalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionToggleIsOpenModalLogin, (state) => {
      state.isOpenModalLogin = !state.isOpenModalLogin;
    })
    .addCase(actionToggleIsOpenModalMenu, (state) => {
      state.isOpenModalMenu = !state.isOpenModalMenu;
    })
    .addCase(actionToggleIsOpenModalNewletter, (state) => {
      state.isOpenModalNewletter = !state.isOpenModalNewletter;
    });
});

export default modalReducer;
