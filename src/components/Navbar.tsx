// Navbar.tsx
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #28b463;
  color: #fff;
  padding: 1rem;
  position:fixed
  z-index: 10000;
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
  const handleAboutClick = () => {
    router.push("/About");
  };

  return (
    <StyledNav>
      <StyledLink onClick={handleHomeClick} href="/">
        Home
      </StyledLink>
      <StyledLink onClick={handleUploadClick} href="/Upload">
        Upload
      </StyledLink>
      <StyledLink onClick={handleAboutClick} href="/About">
        About
      </StyledLink>
    </StyledNav>
  );
};

export default Navbar;
