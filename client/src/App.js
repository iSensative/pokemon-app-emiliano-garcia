import "./App.css";
import { Route, Switch} from "react-router-dom";
import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Card from "./components/Card/Card";
import Home from "./components/Home/Home";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon";
import Details from "./components/Details/Details";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/home'>
          <Home/>
        </Route>
        <Route path='/createPokemon'>
           <CreatePokemon />
        </Route>
        <Route exact path='/detail/:id'>
           <Details/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
