import { configureStore } from '@reduxjs/toolkit';
import flyerHomeReducer from './reducers/flyerHomeReducer';
import modalReducer from './reducers/modalReducer.';
import reportReducer from './reducers/reportReducer';
import userReducer from './reducers/userReducer';
import agendaReducer from './reducers/agendaReducer';

const store = configureStore({
  reducer: {
    flyerHomeReducer,
    modalReducer,
    reportReducer,
    userReducer,
    agendaReducer,
  },
});

export default store;

// Je déduis le type `RootState` et `AppDispatch` depuis le store lui même
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
