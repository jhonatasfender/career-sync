import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Dashboard } from '@career/icons';

import GlobalStyles from './global/styles';
import Layout from './layout';
import NoMatch from './pages/no-match';
import Skill from './pages/skill';
import Work from './pages/work';

export default function Root(props: any) {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="work" element={<Work />} />
            <Route path="skill" element={<Skill />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
