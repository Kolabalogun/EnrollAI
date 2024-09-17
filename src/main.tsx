import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import Loader from "./components/common/loader.tsx";
import { AppProvider } from "./context/useGlobalContext.tsx";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <AppProvider>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </AppProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
