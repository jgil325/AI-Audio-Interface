// Navbar.tsx
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

export const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1.5rem;
  padding: 0.5rem;

  &:hover {
    color: #ccc;
  }
`;

interface Props {}

const Navbar: React.FC<Props> = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };
  const handleUploadClick = () => {
    router.push("/Upload");
  };

  return (
    <StyledNav>
      <StyledLink onClick={handleHomeClick} href="/">
        Home
      </StyledLink>
      <StyledLink onClick={handleUploadClick} href="/Upload">
        Upload
      </StyledLink>
    </StyledNav>
  );
};

export default Navbar;
