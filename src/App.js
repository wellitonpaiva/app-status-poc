import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup } from 'react-bootstrap';
import StatusCard from './StatusCard';

function App() {
  return (
  <div>
    <h1>Status show poc</h1>
    <StatusCard/>
  </div>
  );
}

export default App;
