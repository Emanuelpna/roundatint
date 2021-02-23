import React from "react";
import loadable from "@loadable/component";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "/@/pages/index";

const Projeto = loadable(() => import("/@/pages/projeto"), {
  fallback: <div>Carregando...</div>,
});

const ContactPage = loadable(() => import("/@/pages/contato"), {
  fallback: <div>Carregando...</div>,
});

import { theme } from "/@/styles/themes";
import { GlobalStyles } from "/@/styles/global";

import { I18nContextProvider } from "./data/context/I18nContext";

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
            <Projeto />
          </Route>
          <Route path="/contato">
            <ContactPage />
          </Route>
        </Switch>
      </ThemeProvider>
      </I18nContextProvider>
    </Router>
  );
}

export default App;
