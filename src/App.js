import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;
