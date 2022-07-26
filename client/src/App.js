import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CardDetail from "./components/CardDetail/CardDetail";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import CardCreate from "./components/CardCreate/CardCreate";

function App() {
  return (
    <div className="App">
      <Route path="/home" component={NavBar} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/pokemon/:id" component={CardDetail} />
      <Route exact path="/home/newpokemon" component={CardCreate} />
    </div>
  );
}

export default App;
