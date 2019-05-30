import React, { useState } from 'react';
import Repo from './Repo';
import './Repos.css';

const Repos = ({ data }) => {
  const [page, setPage] = useState(1);

  const handlePagination = (e) => {
    setPage(e.target.id);
  };

  const indexOfLastRepos = page * 10;
  const indexOfFirstRepos = indexOfLastRepos - 10;
  const currentRepos = data.slice(indexOfFirstRepos, indexOfLastRepos);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / 10); i += 1) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map(number => (
    <button key={number} id={number} onClick={handlePagination} type="button">
      {number}
    </button>
  ));

  return (
    <React.Fragment>
      {data === undefined || data.length === 0 ? (
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
