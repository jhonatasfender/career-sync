import styled from 'styled-components';

import { Dashboard, Logo } from '@career/icons';
import { MenuList } from '@career/ui';
import { Outlet } from 'react-router-dom';

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

const Content = styled.div`
  padding: 4rem;
`;

const Layout = () => {
  return (
    <MainContainer>
      <NavBar>
        <Logo />

        <MenuList
          items={[
            { icon: <Dashboard />, title: 'Dashboard', path: '/' },
            {
              icon: <Dashboard />,
              title: 'Experiências Profissionais',
              path: '/work',
            },
            { icon: <Dashboard />, title: 'Habilidades', path: '/skill' },
          ]}
        />
      </NavBar>

      <ContentContainer>
        <Header>teste</Header>
        <Content>
          <Outlet />
        </Content>
      </ContentContainer>
    </MainContainer>
  );
};

export default Layout;
