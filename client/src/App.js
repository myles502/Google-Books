import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./App.css";
import Search from "./components/Searchpage";
import Saved from "./components/Savedpage";
import NoMatch from "./components/NoMatch"
// router for search, saved page etc import switch as well 
//make static file for data- fake google books. json 
//make wireframe or refrence a wireframe components-consider changing pages to nav,jumbo, etc 

function App() {
  return (
    
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
