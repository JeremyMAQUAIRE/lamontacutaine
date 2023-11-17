import { createReducer } from '@reduxjs/toolkit';
import fetchFlyerHome from '../thunks/flyerHomeThunks';

interface IFlyer {
  id: number;
  url: string;
  title: string;
  cover_media: boolean;
  home_slider: boolean;
  preview_order: null | number;
  type: string;
}

interface IHomeFlyer {
  isLoading: boolean;
  flyers: IFlyer[];
}

const initialState: IHomeFlyer = {
  isLoading: true,
  flyers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchFlyerHome.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchFlyerHome.fulfilled, (state, action) => {
      state.flyers = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchFlyerHome.rejected, (state) => {
      state.isLoading = false;
    });
});

export default reducer;
