import {BrowserRouter as Router, Route} from "react-router-dom";

import "./App.css";
import Search from "./components/Searchpage";
import Saved from "./components/Savedpage"
// router for search, saved page etc import switch as well 
//make static file for data- fake google books. json 
//make wireframe or refrence a wireframe components-consider changing pages to nav,jumbo, etc 

function App() {
  return (
    <div>App</div>
    // <Router>
    //   <div>
    //     <Nav />
    //     <Switch>
    //       <Route exact path="/">
    //         <Search />
    //       </Route>
    //       <Route exact path="/saved">
    //         <Saved />
    //       </Route>
    //       <Route>
    //         <NoMatch />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}


export default App;
