import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './global/styles';
import Layout from './layout';
import Dashboard from './pages/dashboard';
import MakeResume from './pages/make-resume';
import NoMatch from './pages/no-match';
import Skill from './pages/skill';
import AddSkill from './pages/skill/pages/add';
import Work from './pages/work';

const queryClient = new QueryClient();

export default function Root(props: any) {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
}
