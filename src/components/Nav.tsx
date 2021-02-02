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

const Nav = styled.nav``;

const NavItems = styled.ul`
  list-style-type: none;
  display: flex;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  text-decoration: none;
`;
