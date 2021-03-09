import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import PostDetail from './component/PostDetail/PostDetail';
import NotMatch from './component/NotMatch/NotMatch';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/home">Home2</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">

          </Route>
          <Route path="/post/:id">
            <PostDetail></PostDetail>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
          
          
          
          
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
