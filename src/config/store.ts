import { configureStore, ThunkAction, AnyAction } from "@reduxjs/toolkit";
import loanRequest from "./reducers/loanRequest.reducer";
import { loadingBarMiddleware } from "react-redux-loading-bar";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const store = configureStore({
  reducer: { loanRequest },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ['payload.config', 'payload.request','payload.headers', 'error', 'meta.arg']
      },
    }).concat(
      loadingBarMiddleware({
        promiseTypeSuffixes: ["/pending", "/fulfilled", "/rejected"],
      })
    ),
});

export const getStore = () => store;
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  unknown,
  AnyAction
>;
export default getStore;
