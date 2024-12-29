import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { apiSlice } from "./features/apiSlice";

// Configuration for Redux-Persist
const persistConfig = {
  key: "enrollai",
  storage,
  serialize: true,
  deserialize: true,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with persistence
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        // Ignore these paths in state
        ignoredPaths: ["register"],
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});

// Create a persistor for the Redux store
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
// Export the configured store and persistor
export { store, persistor };
