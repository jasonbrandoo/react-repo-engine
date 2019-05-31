import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 50%;
  margin: auto;
`;

const Heading = styled.h3`
  color: ${props => props.theme.primary};
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
  background-color: ${props => props.theme.secondary};
  border: none;
  border-radius: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  box-shadow: 2px 2px rgb(0, 0, 0, 0.5);
  cursor: pointer;
  display: block;
  width: 50%;
  margin: auto;
  margin-top: 1rem;
`;

const Searchbar = ({ url }) => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    url(`https://api.github.com/search/repositories?q=language:${name}&sort=star&order=desc`);
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
          Find
        </Button>
      </Form>
    </SearchContainer>
  );
};

export default Searchbar;
