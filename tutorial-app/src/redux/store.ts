import { createStore } from 'redux';
import { gameReducer } from './reducer';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = persistCombineReducers(persistConfig, gameReducer);


// export const store = createStore(reducer);
// export const persistor = persistStore(store);
export const store = createStore(gameReducer);
