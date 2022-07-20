import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CardDetail from "./components/CardDetail/CardDetail";
import LandinPage from "./components/LandinPage/LandinPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandinPage} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/:id" component={CardDetail} />
    </div>
  );
}

export default App;
