import React, { useState } from 'react';
import styled from 'styled-components';
import useGithub from '../../hooks/useGithub';

const SearchContainer = styled.div`
  width: 50%;
  margin: auto;
`;

const Heading = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;
`;

const Form = styled.form`
  width: 100%;
`;

const InputText = styled.input`
  margin: auto;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 2px;
  font-size: 1rem;
  cursor: pointer;
  display: block;
  width: 50%;
  margin: auto;
  margin-top: 1rem;
`;

const Searchbar = () => {
  const [name, setName] = useState('');
  const { findRepos } = useGithub();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    findRepos(name);
    setName('');
  };

  return (
    <SearchContainer>
      <Heading>Search Here!!</Heading>
      <Form onSubmit={handleSubmit}>
        <InputText
          type="text"
          name="repos"
          placeholder="Search user"
          className="search-input"
          onChange={handleChange}
          value={name}
          required
        />
        <Button type="submit" className="search-button">
          Search
        </Button>
      </Form>
    </SearchContainer>
  );
};

export default Searchbar;
