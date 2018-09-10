import React, { Component } from 'react';
import { Consumer } from '../../context';
import './Searchbar.css';

class Searchbar extends Component {
  state = {
    repos: '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  findRepos = (searchRepos, e) => {
    e.preventDefault();
    const { repos } = this.state;
    searchRepos(repos);
  }

  render() {
    return (
      <Consumer>
        {({ searchRepos }) => (
          <div className="search-bar">
            <h3 className="search-text">Search Here!!</h3>
            <form onSubmit={this.findRepos.bind(this, searchRepos)}>
              <input
                type="text"
                name="repos"
                placeholder="Search user"
                className="search-input"
                onChange={this.onChange}
                required
              />
              <button
                type="submit"
                className="search-button"
              >
              Search
              </button>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Searchbar;
