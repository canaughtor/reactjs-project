import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import countrySlice from './country/countrySlice';
import protocolSlice from 'app/redux/protocol/protocolSlice';

const store = configureStore({
  reducer: {
   protocolList : protocolSlice,
   countryList: countrySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
