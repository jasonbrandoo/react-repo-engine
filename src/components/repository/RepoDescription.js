import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import useGithub from '../../hooks/useGithub';

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div`
  padding: 1rem;
`;

const Heading = styled.h2`
  letter-spacing: 5px;
  font-weight: 100;
`;

const Image = styled.img`
  width: 50%;
  display: block;
  margin-top: 10px;
`;

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

const RepoDescription = ({ url }) => {
  const [repository] = useGithub(`https://api.github.com/repos${url}`);
  console.log(repository);
  return (
    <Container>
      {repository.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <Panel>
            <Heading>{repository.name}</Heading>
            <small>{repository.owner.type}</small>
            <Image src={repository.owner.avatar_url} alt="image" />
            <p>{repository.description}</p>
          </Panel>
          <Panel>
            <Heading>{repository.full_name}</Heading>
            <p>
              Language :
              <span>{repository.language}</span>
            </p>
            <p>
              Stars :
              <span>{repository.stargazers_count}</span>
            </p>
            <p>
              Forks :
              <span>{repository.forks}</span>
            </p>
            <p>
              Watchers :
              <span>{repository.watchers}</span>
            </p>
            <p>
              License :
              <span>{repository.license.name}</span>
            </p>
          </Panel>
        </>
      )}
    </Container>
  );
};

RepoDescription.propTypes = {
  url: PropTypes.object.isRequired,
};

export default RepoDescription;
