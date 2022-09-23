import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import MakeupContainer from './components/MakeupContainer';
import SpecificItem from './components/SpecificItem';
import NewReview from './components/NewReview';
import { useParams } from "react-router-dom";
import DisplayReviews from './components/DisplayReviews';
import { Routes } from 'react-router-dom';




function App() {


  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [makeup, setMakeup] = useState([])
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState(false)
  

  useEffect(() => {
    fetch('/makeups').then(res => {
      if(res.ok){
      res.json().then(data=>{
        setMakeup(data)
      })
      } else {
      res.json().then((data) => {
        setErrors(data.error)
      });
      }
    });
    }, [])

    // console.log(makeup)
  
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
        setErrors(data.errors)
      });
      }
    });
    }, [])

  // add review

const addReview = (review) => setReviews(current => [...current,review])

//  console.log(reviews)
//  console.log(addReview)


  // add update 
  function onUpdateReview(updatedReview){
    const freshReview = reviews.map(review => review.id === updatedReview.id? updatedReview: review)
    setReviews(freshReview)
  }
  
// console.log(currentUser)
 



  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser}/>}/>
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>} />
          <Route path="/makeup" element={ <MakeupContainer makeups={makeup}/>}/>
          <Route path="/makeup/:id" element={ <DisplayReviews addReview={addReview}/>}/>
          <Route path="/review/new" element={<NewReview/>}/>
      </Routes>
    </div>
  );
}

export default App;
