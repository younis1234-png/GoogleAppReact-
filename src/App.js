import React from "react"
import './App.css';
import Home from "./pages/Home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SearchPage from "./components/SearchPage";


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route path="/search">
            {/* This is a search page */}
            {/* <SearchPage /> */}
            <SearchPage />

          </Route>

          {/* Home */}
          <Route path="/">
            <Home />
          </Route>

        </Switch>

     {/* Home (the one with the search on) */}
     
     {/* Search page (results page) */}

     </Router>
    </div>
  );
}

export default App;
