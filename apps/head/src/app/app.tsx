import styled from 'styled-components';

import { Apps, Logo } from '@career/icons';

import GlobalStyles from './global/styles';

const MainContainer = styled.main`
  display: flex;
`;

const Header = styled.header`
  background-color: #ffffff;
  height: 12rem;
`;

const NavBar = styled.nav`
  background-color: #ffffff;
  height: 100vh;
  padding: 4.9rem 4.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.div``;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  list-style-type: none;
`;

const Item = styled.li`
  background-color: #4cbc9a;
  display: flex;
  align-items: center;
  gap: 2.4rem;
  padding: 1.6rem 2.4rem;
  border-radius: 1.6rem;
  width: 25rem;
  box-shadow: 1px 1.8rem 3rem -0.6rem rgb(0 0 0 / 60%);
`;

const MenuItemText = styled.span`
  color: #ffffff;
  font-size: 1.8rem;
`;

export default function Root(props: any) {
  return (
    <>
      <GlobalStyles />

      <MainContainer>
        <NavBar>
          <Logo />

          <MenuList>
            <Item>
              <Apps />

              <MenuItemText>Dashboard</MenuItemText>
            </Item>
            <Item>
              <Apps />

              <MenuItemText>Experiências Profissionais</MenuItemText>
            </Item>
            <Item>
              <Apps />

              <MenuItemText>Habilidades</MenuItemText>
            </Item>
            <Item>
              <Apps />

              <MenuItemText>Dashboard</MenuItemText>
            </Item>
            <Item>
              <Apps />

              <MenuItemText>Dashboard</MenuItemText>
            </Item>
          </MenuList>
        </NavBar>

        <ContentContainer>
          <Header>teste</Header>
          <Content>teste</Content>
        </ContentContainer>
      </MainContainer>
    </>
  );
}
