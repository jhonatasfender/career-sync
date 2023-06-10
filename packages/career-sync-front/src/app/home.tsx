import { useQuery } from 'react-query';
import { api } from './app';

export default function Home(): JSX.Element {
  const { data, isLoading, isError } = useQuery('careerPortfolio', () =>
    api.get('/career-portfolio')
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    return <p>Error fetching data</p>;
  }

  return (
    <>
      <button>Create</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((item: any) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
