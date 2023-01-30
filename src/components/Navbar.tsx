// Navbar.tsx
import React from "react";
import Link from "next/link";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

export const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    color: #ccc;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <Link href="/">
        <StyledLink>Home</StyledLink>
      </Link>
      <Link href="/upload">
        <StyledLink>Upload</StyledLink>
      </Link>
      <Link href="/listen">
        <StyledLink>Listen</StyledLink>
      </Link>
    </StyledNav>
  );
};

export default Navbar;
