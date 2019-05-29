import { useContext, useCallback, useState } from 'react';
import axios from 'axios';
import { SearchContext } from '../context';

const useGithub = () => {
  const context = useContext(SearchContext);
  const {
    repository, setRepository, title, setTitle, query, setQuery,
  } = context;

  // const initialRepo = () => {
  //   axios
  //     .get(`https://api.github.com/search/repositories?q=language:${query}&sort=star&order=desc`)
  //     .then(({ data }) => {
  //       setRepository(data.items);
  //       setTitle(`Top ${query} Repository`);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const findRepos = () => {
    axios
      .get(`https://api.github.com/search/repositories?q=${query}&sort=star&order=desc`)
      .then(({ data }) => {
        setRepository(data.items);
        setTitle(`Top ${query} Repository`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    title,
    repository,
    query,
    setQuery,
    findRepos,
  };
};

export default useGithub;
