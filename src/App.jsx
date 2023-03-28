import { useEffect, useState } from 'react';
import Authenticate from './Auth/Authenticate';
import UnAuthenticate from './Auth/UnAuthenticate';
import { useAuth } from './useContext/useContext';
import eatable from './assets/eatable.svg';
import bg from './assets/brooke-lark-HlNcigvUi4Q-unsplash.jpg';
import {
  Bg,
  Circle,
  Loading,
  LoadingContainer,
  Section,
  Container,
} from './AppUi';



const LoadingPage = () => {
  return (
    <LoadingContainer>
      <Bg src={bg} alt='bg' />
      <Circle>
        <img src={eatable} alt='eatable' />
        <p>Food for Everyone</p>
        <Loading></Loading>
      </Circle>
    </LoadingContainer>
  );
};

function App() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Section>
      {loading && !user ? (
        <LoadingPage />
      ) : (
        <Container>{user ? <Authenticate /> : <UnAuthenticate />}</Container>
      )}
    </Section>
  );
}

export default App;
