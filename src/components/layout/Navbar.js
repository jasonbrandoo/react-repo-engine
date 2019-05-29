import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  background-color: rgb(50, 50, 50);
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
  color: palevioletred;
  text-decoration: none;
  margin-right: 1rem;
  transition: color 0.8s ease-out;

  :hover {
    color: white;
  }
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
export default Navbar;
