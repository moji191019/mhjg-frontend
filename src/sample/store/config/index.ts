import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import loginSlice from '../slices/loginSlice';
import joinSlice from '../slices/joinSlice';

const logger = createLogger();

const rootReducer = combineReducers({
  loginData: loginSlice.reducer,
  joinData: joinSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
