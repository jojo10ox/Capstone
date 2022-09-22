import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import MakeupContainer from './components/MakeupContainer';
import DisplayReviews from './components/DisplayReviews'
import SpecificItem from './components/SpecificItem';
import NewReview from './components/NewReview';
import { useParams } from "react-router-dom";



function App() {


  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [makeup, setMakeup] = useState([])
  const [reviews, setReviews] = useState([])
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

  useEffect(() => {
    fetch('/reviews').then(res => {
      if(res.ok){
      res.json().then(setReviews)
      } else {
      res.json().then((data) => {
        setErrors(data.error)
      });
      }
    });
    }, [])

  // add review
  const addReview = (newReview) => {
    setReviews([...reviews, newReview])
  }
  
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
            <MakeupContainer
              makeups={makeup}
            />
        </Route>
        <Route exact path="/makeup/:id">
            <SpecificItem/>
            <DisplayReviews/>
          </Route>
          <Route exact path="/review">
            <NewReview
            currentUserId={currentUser.id}
            makeup={makeup}
            addReview={addReview}
            />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
