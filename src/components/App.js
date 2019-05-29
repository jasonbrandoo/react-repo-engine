import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { SearchProvider } from '../context';
import Navbar from './layout/Navbar';
import About from './layout/About';
import Searchbar from './layout/Searchbar';
import Repos from './repository/Repos';
import RepoDescription from './repository/RepoDescription';

import './App.css';

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const App = () => (
  <SearchProvider>
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Container>
          <Route exact path="/" component={Searchbar} />
          <Route exact path="/" component={Repos} />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/:owner/:repo" component={RepoDescription} />
          </Switch>
        </Container>
      </React.Fragment>
    </BrowserRouter>
  </SearchProvider>
);

export default App;
