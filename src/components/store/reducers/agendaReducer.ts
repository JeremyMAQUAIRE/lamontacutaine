import { createReducer } from '@reduxjs/toolkit';
import fetchDataEvent from '../thunks/eventThunk';

interface IMedia {
  id: number;
  title: string;
  type: string;
  url: string;
  home_slider: boolean;
  cover_media: boolean;
  preview_order: number | null;
}

interface IEvent {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  inscription_end_date: string | null;
  maximum_capacity: number;
  event_location: string;
  price: string;
  open_to_trader: boolean;
  category: Array<{ id: number; name: string }>;
  medias: Array<IMedia>;
}

interface IAgendaState {
  isLoading: boolean;
  events: IEvent[];
}

const initialState: IAgendaState = {
  isLoading: false,
  events: [],
};

const agendaReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchDataEvent.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchDataEvent.fulfilled, (state, action) => {
      state.events = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchDataEvent.rejected, (state) => {
      state.isLoading = false;
    });
});
export default agendaReducer;
