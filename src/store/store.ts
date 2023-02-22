import { configureStore } from '@reduxjs/toolkit';
import modal from './slices/modal';

const store = configureStore({
  reducer: {
    modal,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
