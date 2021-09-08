import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Signup from './Signup'
import Login from './Login'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Navbar/>
            <Home/>
          </Route>
          <Route path="/sign-up">
            <Navbar/>
            <Signup/>
          </Route>
          <Route path="/login">
            <Navbar/>
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
