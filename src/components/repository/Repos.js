import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Repo from './Repo';

const rotate = keyframes`
  from {
        transform: rotate(0deg)
      }
      to {
        transform: rotate(360deg)
    }
`;

const Spinner = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 35px;
  height: 35px;
  border: 5px solid rgba(189, 189, 189, 0.25);
  border-left-color: rgba(3, 155, 229, 1);
  border-top-color: rgba(3, 155, 229, 1);
  border-radius: 50%;
  animation: ${rotate} 1s infinite linear;
`;

const List = styled.div``;

const PaginationButton = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: ${props => props.theme.secondary};
  margin-right: 0.75rem;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
  box-shadow: 2px 2px rgb(0, 0, 0, 0.5);
  border-radius: 1rem;
`;

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
    <Button key={number} id={number} onClick={handlePagination} type="button">
      {number}
    </Button>
  ));

  return (
    <React.Fragment>
      {data === undefined || data.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <h1>Title</h1>
          <List>
            {currentRepos.map(repo => (
              <Repo key={repo.id} repo={repo} />
            ))}
          </List>
          <PaginationButton>{renderPageNumbers}</PaginationButton>
        </>
      )}
    </React.Fragment>
  );
};

export default Repos;
