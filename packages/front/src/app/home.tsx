import { useQuery } from 'react-query';
import { api } from './app';
import { useNavigate } from 'react-router-dom';

type ActionProps = { item: any };

function Actions({ item }: ActionProps): JSX.Element {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form', { state: { id: item.id } });
  };

  return (
    <td>
      <button onClick={handleClick}>Edit</button>
      <button>Delete</button>
    </td>
  );
}

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
              <td>{item.username}</td>
              <Actions item={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
