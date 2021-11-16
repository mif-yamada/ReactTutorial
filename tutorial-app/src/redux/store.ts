import { configureStore } from '@reduxjs/toolkit';
import { gameReducer } from './reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const store = createStore(gameReducer);
// const persistedReducer = persistReducer(persistConfig, gameReducer);

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch
