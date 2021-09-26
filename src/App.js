import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css';
import Checkout from "./components/Checkout";
import { Header } from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>

    </Router>

  );
}

export default App;
