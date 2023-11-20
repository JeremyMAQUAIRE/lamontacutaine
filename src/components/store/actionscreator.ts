/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import { createAction } from '@reduxjs/toolkit';

// Gestion d'ouverture des modal
export const actionToggleIsOpenModalLogin = createAction(
  '@modal/TOGGLE_ISOPEN_MODAL_LOGIN'
);
export const actionToggleIsOpenModalMenu = createAction(
  '@modal/TOGGLE_ISOPEN_MODAL_MENU'
);

