import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchDataEvent = createAsyncThunk(
  'FETCH_DATA_EVENTS',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-empty-pattern
  async (eventId, {}) => {
    const response = await axios.get(
      'https://admin.lamontacutaine.fr/api/v1/events'
    );

    return response.data.events;
  }
);

export default fetchDataEvent;
