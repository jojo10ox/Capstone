import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import MakeupContainer from './components/MakeupContainer';
import Makeup from './components/Makeup';



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [makeup, setMakeup] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch('/makeups').then(res => {
      if(res.ok){
      res.json().then(setMakeup)
      } else {
      res.json().then((data) => {
        setErrors(data.error)
      });
      }
    });
    }, [])
  

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  console.log(currentUser)



  return (
    <div>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/signup">
            <Signup setCurrentUser={setCurrentUser}/>
          </Route>
        <Route exact path="/login">
            <Login 
              setCurrentUser={setCurrentUser}
            />
        </Route>
        <Route exact path="/makeup">
            <Makeup/>
            <MakeupContainer
              makeups={makeup}
            />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
