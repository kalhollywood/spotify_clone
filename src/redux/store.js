import { configureStore } from '@reduxjs/toolkit';

import { shazamCoreApi } from './services/shazamCore';
import playerReducer from './features/playerSlice';

// Boilerplate redux toolkit code.
export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
