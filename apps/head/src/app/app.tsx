import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Dashboard } from '@career/icons';

import GlobalStyles from './global/styles';
import Layout from './layout';
import MakeResume from './pages/make-resume';
import NoMatch from './pages/no-match';
import Skill from './pages/skill';
import AddSkill from './pages/skill/pages/add';
import Work from './pages/work';

export default function Root(props: any) {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="resume" element={<MakeResume />} />
            <Route path="work" element={<Work />} />
            <Route path="skill" element={<Skill />} />
            <Route path="skill/add" element={<AddSkill />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
