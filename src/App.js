import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css';
import Login from "./components/auth/Login";
import Checkout from "./components/Checkout";
import { Header } from './components/Header';
import Home from './components/Home';
import Payment from "./components/Payment";
import { auth } from "./firebase/firebase";
import { useStateValue } from "./state/StateProvider";



function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    //solo se ejecutará una vez cuando se cargue el componente de la aplicación ...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header/>
            <Payment/>
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
