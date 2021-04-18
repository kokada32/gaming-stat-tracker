import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import matchList from './pages/matchList';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to={""}>Home</Link>
        </div>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={matchList} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
