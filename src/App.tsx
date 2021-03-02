import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "/@/pages/index";

import LoadingScreen from "/@/components/Templates/LoadingScreen";

import { theme } from "/@/styles/themes";
import { GlobalStyles } from "/@/styles/global";

import { I18nContextProvider } from "/@/data/context/I18nContext";

const Projeto = lazy(() => import("/@/pages/projeto"));

const ContactPage = lazy(() => import("/@/pages/contato"));

function App() {
  return (
    <Router>
      <I18nContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route path="/projeto">
              <Suspense fallback={<LoadingScreen />}>
                <Projeto />
              </Suspense>
            </Route>
            <Route path="/contato">
              <Suspense fallback={<LoadingScreen />}>
                <ContactPage />
              </Suspense>
            </Route>
          </Switch>
        </ThemeProvider>
      </I18nContextProvider>
    </Router>
  );
}

export default App;
