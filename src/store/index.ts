import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { first } from "./slices";

const reducers = combineReducers({
  first: first,
});

export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: reducers,
    preloadedState: initialState,
    devTools: true,
  });
};

const store = createReduxStore();

export type RootReducer = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof configureStore>;

export default store;
