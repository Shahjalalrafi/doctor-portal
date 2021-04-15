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
import AllPatients from './Component/Dashboard/AllPatients/AllPatients';
import AddDoctor from './Component/Dashboard/AddDoctor/AddDoctor';

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
          
          <PrivateRoute path='/appointment'>  
            <Appointment />
          </PrivateRoute>
          
          <PrivateRoute path='/dashboard/patients'>  
            <AllPatients />
          </PrivateRoute>

          <PrivateRoute path='/dashboard/add-doctor'>  
            <AddDoctor />
          </PrivateRoute>

          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>

          <Route exact path='/'>  
            <Home />
          </Route>
          
          <Route path='*'>  
            <h2>page not found!!</h2>
          </Route>

        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
