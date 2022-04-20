import React, { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "/@/pages/index";

const Projeto = lazy(() => import("/@/pages/projeto"));

const ContactPage = lazy(() => import("/@/pages/contato"));

import { theme } from "/@/styles/themes";
import { GlobalStyles } from "/@/styles/global";

import { I18nContextProvider } from "/@/data/context/I18nContext";

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
              <Suspense fallback={<div>Carregando...</div>}>
                <Projeto />
              </Suspense>
            </Route>
            <Route path="/contato">
              <Suspense fallback={<div>Carregando...</div>}>
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
