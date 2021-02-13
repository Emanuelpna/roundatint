import React from "react";
import loadable from "@loadable/component";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "/@/pages/index";

const Projeto = loadable(() => import("/@/pages/projeto"), {
  fallback: <div>Carregando...</div>,
});

import { theme } from "/@/styles/themes";
import { GlobalStyles } from "/@/styles/global";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/projeto">
            <Projeto />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
