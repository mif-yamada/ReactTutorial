import { createStore } from 'redux';
import { gameReducer } from './reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

export const store = createStore(gameReducer);
// const persistedReducer = persistReducer(persistConfig, gameReducer);
