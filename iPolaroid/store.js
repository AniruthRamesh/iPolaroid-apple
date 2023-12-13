import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer,persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import feedDataReducer from "./reducers/feedDataReducer";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  feedData: feedDataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);