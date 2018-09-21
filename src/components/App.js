import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from '../context';
import Navbar from './layout/Navbar';
import About from './layout/About';
import Searchbar from './layout/Searchbar';
import Repos from './repository/Repos';
import RepoDescription from './repository/RepoDescription';

import './App.css';

const App = () => (
  <Provider>
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Route exact path="/" component={Searchbar} />
          <Route exact path="/" component={Repos} />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/:owner/:repo" component={RepoDescription} />
          </Switch>
        </div>
      </React.Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
