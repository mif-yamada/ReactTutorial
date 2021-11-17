import { createStore } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { gameReducer } from './reducer';

// TODO:ストレージ保存用
// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, gameReducer);

// export default () => {
//   const store = createStore(persistedReducer);
//   const persistor = persistStore(store);
//   return { store, persistor };
// };

export const store = createStore(gameReducer);
