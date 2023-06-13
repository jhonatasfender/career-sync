import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';

import { api } from './app';

export default function Form(): JSX.Element {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;

  const { data, isLoading, isError } = useQuery(
    ['careerPortfolioById', id],
    () => api.get(`/career-portfolio/${id}`)
  );

  useEffect(() => {
    data && reset(data.data);
  }, [data, reset]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    navigate('/');

    return <p>Error fetching data</p>;
  }

  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('id')} />

      <div>
        <label htmlFor="username">User Name</label>
        <input type="text" id="username" {...register('username')} />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register('email')} />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" {...register('phone')} />
      </div>

      <div>
        <label htmlFor="githubLink">GitHub Link</label>
        <input type="text" id="githubLink" {...register('githubLink')} />
      </div>

      <div>
        <label htmlFor="portfolioLink">Portfolio Link</label>
        <input type="text" id="portfolioLink" {...register('portfolioLink')} />
      </div>

      <div></div>

      <pre>{JSON.stringify(data.data, null, 2)}</pre>
      <button type="submit">enviar</button>
    </form>
  );
}
