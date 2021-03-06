import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from "./GlobalStyle"
import Layout from "./components/Layout"
import Top from "./Top"
import About from "./About"
import Contents from "./Contents"
import Contact from "./Contact"
import Registration from "./Registration"

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path='/' component={Top} />
          <Route path='/about' component={About} />
          <Route path='/contents' component={Contents} />
          <Route path='/contact' component={Contact} />
          <Route path='/registration' component={Registration} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
