import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavItems>
        <NavLink to='/'>
          <NavItem isActive={location.pathname === '/'}>Home</NavItem>
        </NavLink>
        <NavLink to='/todos'>
          <NavItem isActive={location.pathname === '/todos'}>Todos</NavItem>
        </NavLink>
      </NavItems>
    </Nav>
  );
};

const Nav = styled.nav`
  background: #3a3a3a;
`;

const NavItems = styled.ul`
  list-style-type: none;
  display: flex;
`;

type TNavItemProps = {
  isActive: boolean;
};

const NavItem = styled.li<TNavItemProps>`
  color: ${({ isActive }) => (isActive ? 'white' : '#cecece')};
  padding: 1rem 2rem;
  font-size: 2rem;
  transition: all 0.2s ease;

  &:hover {
    color: #222;
    background: #c7c7c7;
    cursor: pointer;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;
