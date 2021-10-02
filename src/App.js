import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tournaments from "./pages/Tournaments";
import Games from "./pages/Games";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/games">
          <Games />
        </Route>
        <Route path="/tournaments">
          <Tournaments />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact={true} path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
