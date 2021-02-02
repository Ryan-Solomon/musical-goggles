import React from 'react';
import styled from 'styled-components';

export const Navigation = () => {
  return (
    <Nav>
      <NavItems>
        <NavItem></NavItem>
      </NavItems>
    </Nav>
  );
};

const Nav = styled.nav``;

const NavItems = styled.ul`
  list-style-type: none;
`;

const NavItem = styled.li``;
