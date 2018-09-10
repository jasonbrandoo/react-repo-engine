import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    reposList: [],
    heading: '',
    searchRepos: (result) => {
      this.findRepos(result);
    },
  };

  componentDidMount() {
    this.fetchRepos();
  }

  fetchRepos = () => {
    axios.get('https://api.github.com/search/repositories?q=language:javascript&sort=star&order=desc')
      .then(({ data }) => {
        this.setState({
          reposList: data.items,
          heading: 'Top Javascript Repo',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  findRepos = (result) => {
    axios.get(`https://api.github.com/search/repositories?q=${result}&sort=star&order=desc`)
      .then(({ data }) => {
        this.setState({
          reposList: data.items,
          heading: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
