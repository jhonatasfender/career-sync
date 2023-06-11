import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import { api } from './app';

export default function Form(): JSX.Element {
  const { register, handleSubmit, reset } = useForm();

  const location = useLocation();
  const id = location.state?.id;

  const { data, isLoading, isError } = useQuery(
    ['careerPortfolioById', id],
    () => api.get(`/career-portfolio${id}`)
  );

  useEffect(() => {
    data && reset(data);
  }, [data, reset]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    return <p>Error fetching data</p>;
  }

  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('username')} />

      <button type="submit">enviar</button>
    </form>
  );
}
