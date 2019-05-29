import React, { useState, createContext } from 'react';

const SearchContext = createContext();

const SearchProvider = (props) => {
  const [repository, setRepository] = useState([]);
  const [title, setTitle] = useState('');
  const [query, setQuery] = useState('javascript');

  return (
    <SearchContext.Provider
      value={{
        repository,
        setRepository,
        title,
        setTitle,
        query,
        setQuery,
      }}
      {...props}
    />
  );
};

export { SearchContext, SearchProvider };
