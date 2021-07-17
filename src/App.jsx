import { Card } from './components/Card';
import { Filter } from './components/Filter';
import { Header } from './components/Header'
import { Dashboard, Container } from './StyleApp';

export default function App() {
  return (
    <Container>
      <Header />
      <Dashboard>
        <Filter />
        <Card />
      </Dashboard>
    </Container>
  );
}



