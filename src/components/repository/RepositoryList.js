import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

const Heading = styled.h3`
  color: rgb(255, 255, 255);
  background-color: rgb(50, 50, 50);
  border-radius: 10px;
  padding: 0.5rem;
`;

// to={`/${repository.owner.login}/${repository.name}`}
// repository.full_name

const Link = ({ className, children, to }) => (
  <NavLink to={to} className={className}>
    <Heading>{children}</Heading>
  </NavLink>
);

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const RepositoryList = ({ repository }) => (
  <React.Fragment>
    <Wrapper>
      <StyledLink to={`/${repository.owner.login}/${repository.name}`}>
        {repository.full_name}
      </StyledLink>
    </Wrapper>
  </React.Fragment>
);

Link.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

RepositoryList.propTypes = {
  repository: PropTypes.object.isRequired,
};

export default RepositoryList;
