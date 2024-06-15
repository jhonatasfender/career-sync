import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  overflow: hidden;
`;

export const Header = styled.header`
  background-color: #ffffff;
  height: 12rem;
`;

export const NavBar = styled.nav`
  background-color: #ffffff;
  height: 100vh;
  padding: 4.9rem 4.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.div`
  padding: 4rem;
  height: calc(100vh - 12rem);
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &::-webkit-scrollbar-corner {
    background: #f1f1f1;
  }
`;
