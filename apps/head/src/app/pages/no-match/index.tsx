import { NotFound } from '@career/icons';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const an1 = keyframes`
	0% {
		transform: rotate(0);
  }

	5% {
		transform: rotate(3deg);
  }

	15% {
		transform: rotate(-2.5deg);
  }

	25% {
		transform: rotate(2deg);
  }

	35% {
		transform: rotate(-1.5deg);
  }

	45% {
		transform: rotate(1deg);
  }

	55% {
		transform: rotate(-1.5deg);
  }

	65% {
		transform: rotate(2deg);
  }

	75% {
		transform: rotate(-2deg);
  }

	85% {
		transform: rotate(2.5deg);
  }

	95% {
		transform: rotate(-3deg);
  }

	100% {
		transform: rotate(0);
  }

    `;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 20rem);
  min-height: 100%;
`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.6rem;
  background-color: #ffffff;
  padding: 4rem;

  #g6219 {
    transform-origin: 85px 4px;
    animation: ${an1} 12s 0.5s infinite ease-out;
  }
`;

const Test1 = styled(Link)`
  border: 0.1rem solid #000;
`;

const NoMatch = () => {
  return (
    <Main>
      <Test>
        <NotFound />

        <p id="errorText">O-o-oh! Something broke.</p>
        <Test1 id="errorLink" to="/">
          Go Back
        </Test1>
      </Test>
    </Main>
  );
};

export default NoMatch;
