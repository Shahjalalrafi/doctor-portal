import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Appointment from './Component/Appointment/Appointment/Appointment';
import Login from './Component/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivarteRoute/PrivateRoute';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';

export const userContext = createContext()

function App() {
  const [logedInUser, setLogedInUser] = useState({})
  return (
    <userContext.Provider value={[logedInUser, setLogedInUser]} className="App">
      <Router>
        <Switch>
          
          <Route path='/home'>  
            <Home />
          </Route>
          
          <Route path='/login'>  
            <Login />
          </Route>
          
          <Route path='/appointment'>  
            <Appointment />
          </Route>

          <Route path='/dashboard'>
            <Dashboard />
          </Route>

          <Route exact path='/'>  
            <Home />
          </Route>

        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
