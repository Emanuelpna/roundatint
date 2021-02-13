import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "/@/pages/Index";

import { theme } from "/@/styles/themes";
import { GlobalStyles } from "/@/styles/global";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Switch>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
