import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import dataSlice from 'app/redux/diagnosis/dataSlice';

const store = configureStore({
  reducer: {
   clinicData : dataSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
