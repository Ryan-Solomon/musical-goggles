import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Nav>
      <NavItems>
        <NavLink to='todos'>
          <NavItem>Todos</NavItem>
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

const NavItem = styled.li`
  color: white;
  padding: 1rem;
  font-size: 2rem;
  transition: all 0.2s ease;

  &:hover {
    color: #222;
    background: White;
    cursor: pointer;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;
