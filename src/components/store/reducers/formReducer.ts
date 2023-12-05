import { createReducer } from '@reduxjs/toolkit';
import { actionChangeFormChoice } from '../actionscreator';

const initialState = {
  choice: 'test',
  name: '',
  lastname: '',
  mail: '',
  massage: '',
};

const formReducer = createReducer(initialState, (builder) => {
  builder.addCase(actionChangeFormChoice, (state, action) => {
    state.choice = action.payload;
  });
});

export default formReducer;
