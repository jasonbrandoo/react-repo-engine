import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 50%;
  margin: auto;
`;

const Heading = styled.label`
  color: ${props => props.theme.primary};
  font-size: 2rem;
`;

const Form = styled.form`
  width: 100%;
  margin-top: 1rem;
`;

const InputText = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 5px;
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
  margin-bottom: 1rem;
`;

const Searchbar = ({ url }) => {
  const [name, setName] = useState('');

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    url(
      `https://api.github.com/search/repositories?q=language:${name}&sort=star&order=desc`,
    );
    setName('');
  };

  return (
    <SearchContainer>
      <Form onSubmit={handleSubmit}>
        <Heading htmlFor="search">Search</Heading>
        <InputText
          id="search"
          type="text"
          name="repos"
          placeholder="Repository"
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

Searchbar.defaultProps = {
  url: () => {},
};

Searchbar.propTypes = {
  url: PropTypes.func,
};

export default Searchbar;
