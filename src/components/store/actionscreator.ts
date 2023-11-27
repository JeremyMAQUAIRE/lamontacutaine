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
export const actionToggleIsOpenModalNewletter = createAction(
  '@modal/TOGGLE_ISOPEN_MODAL_NEWLETTER'
);

// Gestion des rapports de l apage qui somme nous
export const actionChangeYearMoralReport = createAction<number>('@report/CHANGE_YEAR_MORAL_REPORT');
export const actionChangeYearActivityReport = createAction<number>('@report/CHANGE_YEAR_ACTIVITY_REPORT');
export const actionChangeYearCountReport = createAction<number>('@report/CHANGE_YEAR_COUNT_REPORT');