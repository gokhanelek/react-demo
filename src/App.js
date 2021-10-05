import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Dashboard from './components/layouts/Dashboard';


function App() {
  return (
    <div>
      <Container className="main">
        <Dashboard></Dashboard>
      </Container>

    </div>
  );
}

export default App;
