import { createStore } from 'redux';
import { gameReducer } from './reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const persistConfig = {
  key: 'root',
  storage,
};

// const store = createStore(gameReducer);
const persistedReducer = persistReducer(persistConfig, gameReducer);

export const store = createStore(persistedReducer);
