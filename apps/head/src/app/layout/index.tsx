import { Outlet } from 'react-router-dom';

import { Dashboard, Logo } from '@career/icons';
import { MenuList } from '@career/ui';

import {
  Content,
  ContentContainer,
  Header,
  MainContainer,
  NavBar,
} from './layout.styles';

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
            { icon: <Dashboard />, title: 'Currículo', path: '/resume' },
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
