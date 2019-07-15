import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  background-color: ${props => props.theme.primary};
  padding: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

const Link = ({ className, children, to }) => (
  <NavLink className={className} to={to}>
    {children}
  </NavLink>
);

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.tertiary};
  text-decoration: none;
  margin-right: 1rem;
  transition: color 0.8s ease-out;
`;

const Navbar = () => (
  <React.Fragment>
    <Header>
      <Wrapper>
        <StyledLink to="/">Search</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </Wrapper>
    </Header>
  </React.Fragment>
);

Link.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default Navbar;
