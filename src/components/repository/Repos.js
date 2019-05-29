import React, { useState, useEffect } from 'react';
import Repo from './Repo';
import useGithub from '../../hooks/useGithub';
import './Repos.css';

const Repos = () => {
  const [page, setPage] = useState(1);
  const { repository, findRepos } = useGithub();

  useEffect(() => {
    console.log('Component Did Mount');
    findRepos();
  }, [findRepos]);

  const handlePagination = (e) => {
    setPage(e.target.id);
  };

  const indexOfLastRepos = page * 10;
  const indexOfFirstRepos = indexOfLastRepos - 10;
  const currentRepos = repository.slice(indexOfFirstRepos, indexOfLastRepos);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(repository.length / 10); i += 1) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map(number => (
    <button key={number} id={number} onClick={handlePagination} type="button">
      {number}
    </button>
  ));

  return (
    <React.Fragment>
      {repository === undefined || repository.length === 0 ? (
        <div className="spinner" />
      ) : (
        <>
          <h1>Title</h1>
          <div className="list-repo">
            {currentRepos.map(repo => (
              <Repo key={repo.id} repo={repo} />
            ))}
          </div>
          <ul className="pagination-button">{renderPageNumbers}</ul>
        </>
      )}
    </React.Fragment>
  );
};

export default Repos;
