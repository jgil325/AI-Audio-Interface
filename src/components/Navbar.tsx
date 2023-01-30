// Navbar.tsx
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

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

interface Props {}

const Navbar: React.FC<Props> = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };
  const handleUploadClick = () => {
    router.push("/Upload");
  };
  const handleListenClick = () => {
    router.push("/Listen");
  };

  return (
    <StyledNav>
      <Link onClick={handleHomeClick} href="/">
        Home
      </Link>
      <Link onClick={handleUploadClick} href="/Upload">
        Upload
      </Link>
      <Link onClick={handleListenClick} href="/Listen">
        Listen
      </Link>
    </StyledNav>
  );
};

export default Navbar;
