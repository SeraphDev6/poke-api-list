import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import PokeWrapper from './components/pokeWrapper';
import PokePage from './components/PokePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
                  <PokeWrapper />
            </Route>
            <Route path="/pokemon/:poke">
                  <PokePage />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
