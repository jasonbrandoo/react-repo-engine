import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import RepositoryList from './RepositoryList';
import Searchbar from './Searchbar';
import useGithub from '../../hooks/useGithub';

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

const Error = styled.h1`
  text-align: center;
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

const Repository = () => {
  const [page, setPage] = useState(1);
  const [repository, setUrl, error, loading] = useGithub(
    'https://api.github.com/search/repositories?q=language:javascript&sort=star&order=desc',
  );
  console.log(repository);
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
    <Button key={number} id={number} onClick={handlePagination} type="button">
      {number}
    </Button>
  ));

  return (
    <React.Fragment>
      <Searchbar url={setUrl} />
      {error && <Error>Something went error</Error>}
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <List>
            {currentRepos.map(repo => (
              <RepositoryList key={repo.id} repository={repo} url={setUrl} />
            ))}
          </List>
          <PaginationButton>{renderPageNumbers}</PaginationButton>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Repository;
