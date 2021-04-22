import './App.css';
import { Switch, Route } from 'react-router-dom';
import matchList from './pages/matchList';
import matchNew from './pages/matchNew';
import Navbar from './components/navbar';


function App() {
  return (
    <div id="app">
      <Navbar />
      <main>
        <Switch>
          <Route path="/match/new" component={matchNew} />
          <Route exact path="/" component={matchList} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
