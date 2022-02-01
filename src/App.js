import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="Ghibli-Header">
          <h1>Ghibli Films</h1>
        </header>
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
