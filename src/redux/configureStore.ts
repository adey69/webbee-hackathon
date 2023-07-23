import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { categoriesSlice } from './slices';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { persistConfig } from './reduxPersist';

const rootReducer = combineReducers({
  categories: categoriesSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        thunk: false,
        //@ts-ignore
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type IRootReducer = typeof rootReducer;
export type IStore = typeof store;
export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = IStore['dispatch'];
