import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyled } from './global/styled-global';
import Home from './home';
import Form from './pages/Form';

const queryClient = new QueryClient();

const NotFound = () => {
  return <h1>404 - Página não encontrada</h1>;
};

export const api = axios.create({ baseURL: 'http://localhost:3000/api' });

export function App() {
  return (
    <>
      <GlobalStyled />

      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
