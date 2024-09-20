// Import combineReducers from Redux to combine multiple reducers into a single reducer
import { combineReducers } from "redux";

// Import individual reducers
import toggleSidebarReducer from "./features/toggleSidebarSlice";
import authReducer from "./features/authSlice";
import addDomainsReducer from "./features/domainSlice";
import applicationFormReducer from "./features/applicationForm/applicationFormSlice";
import { apiSlice } from "./features/apiSlice";

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  // Each key-value pair represents a slice of the state managed by a specific reducer
  [apiSlice.reducerPath]: apiSlice.reducer,
  toggleSidebar: toggleSidebarReducer, // Manages state related to sidebar toggling
  auth: authReducer, // Manages state related to authentication
  addDomains: addDomainsReducer, // Adds
  applicationForm: applicationFormReducer,
});

// Export the root reducer for use in the Redux store
export { rootReducer };
