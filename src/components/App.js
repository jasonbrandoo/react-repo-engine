import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './layout/Navbar';
import Home from './layout';
import RepoDescription from './repository/RepoDescription';
import About from '../pages/About';

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/:owner/:repo" component={RepoDescription} />
        </Switch>
      </Container>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
