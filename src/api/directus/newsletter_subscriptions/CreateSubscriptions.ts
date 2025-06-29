import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export default createAsyncThunk(
  'FETCH_CREATE_NEWLETTER_SUBSCRIPTION',
  async (email: string) => {
    try {
      await axios.post(
        'https://api.lamontacutaine.fr/items/newsletter_subscriptions',
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return true;
    } catch (error) {
      return false;
    }
  }
);
