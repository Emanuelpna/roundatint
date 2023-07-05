import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "/@/styles/themes";
import { GlobalStyles } from "/@/styles/global";

import { I18nContextProvider } from "/@/data/context/I18nContext";

import { App } from "./App";
import Index from "/@/pages/index";
const Projeto = lazy(() => import("/@/pages/projeto"));
const ContactPage = lazy(() => import("/@/pages/contato"));

import LoadingScreen from "/@/components/Templates/LoadingScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/projeto",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Projeto />
          </Suspense>
        ),
      },
      {
        path: "/contato",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ContactPage />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <I18nContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <RouterProvider router={router} />
      </ThemeProvider>
    </I18nContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
