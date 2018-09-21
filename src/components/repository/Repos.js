import React, { Component } from 'react';
import { Consumer } from '../../context';
import Repo from './Repo';
import './Repos.css';

class Repos extends Component {
  state = {
    currentPage: 1,
    reposPerPage: 10,
  }

  handlePagination = (e) => {
    this.setState({
      currentPage: Number(e.target.id),
    });
  }

  render() {
    return (
      <Consumer>
        {({ reposList, heading }) => {
          const { currentPage, reposPerPage } = this.state;
          const indexOfLastRepos = currentPage * reposPerPage;
          const indexOfFirstRepos = indexOfLastRepos - reposPerPage;
          const currentRepos = reposList.slice(indexOfFirstRepos, indexOfLastRepos);
          const pageNumbers = [];
          for (let i = 1; i <= Math.ceil(reposList.length / reposPerPage); i++) {
            pageNumbers.push(i);
          }
          const renderPageNumbers = pageNumbers.map(number => (
            <li key={number} id={number} onClick={this.handlePagination}>
              {number}
            </li>
          ));
          if (reposList === undefined || reposList.length === 0) {
            return <div className="spinner" />;
          } return (
            <React.Fragment>
              <h1>{heading}</h1>
              <div className="list-repo">
                {currentRepos.map(repo => (
                  <Repo key={repo.id} repo={repo} />
                ))}
              </div>
              <ul className="pagination-button">
                {renderPageNumbers}
              </ul>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Repos;
