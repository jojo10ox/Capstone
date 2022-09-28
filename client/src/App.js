import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import MakeupContainer from './components/MakeupContainer';
import NewReview from './components/NewReview';
import { useParams } from "react-router-dom";
import DisplayReviews from './components/DisplayReviews';
import { Routes } from 'react-router-dom';





function App() {

  const [editContactId, setEditContactId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [makeupApi, setMakeupApi] = useState([])
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState(false)
  const [sendMakeup, setSendMakeup] = useState({})
  const [savedMakeup, setSavedMakeup] = useState([])
  const [change, setChange] = useState(false);



  useEffect(() => {
    fetch('/all_makeup').then(res => {
      if(res.ok){
      res.json().then(data=>{
        setMakeupApi(data)
      })
      } else {
      res.json().then((data) => {
        setErrors(data.error)
      });
      }
    });
    }, [])

// console.log(makeupApi)
  
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
    }, [change])

    const getSavedMakeup = () => {
      fetch('/makeups')
      .then(res=>res.json())
      .then(data=>setSavedMakeup(data))

    }
    
    useEffect(() => {getSavedMakeup()}, [change])

    //handle delete 
    const handleDelete = () => {
      getSavedMakeup();
    };


    // add review
    const addReview = (review) => setReviews(current => [...current,review])



    //handle edit review click
    function handleEditClick(e, currentUser){
      e.preventDefault()
      setEditContactId(currentUser.id)
    }



    // add update 
    const onUpdateReview = (review) => setReviews(current => [...current,review])


    const deleteReview = (id) => setReviews(current => current.filter(r => r.id !== id)) 
  

  return (
    <div>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
          {/* <Route path="/reviews" element={<ReviewedMakeup reviews={reviews}/>}/>  */}
          <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser}/>}/>
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>} />
          <Route path="/" element={ <MakeupContainer makeupsApi={makeupApi} setSendMakeup={setSendMakeup} currentUser={currentUser}/>}/>
          <Route path="/reviews" element={ 
            <DisplayReviews 
              change={change}
              reviews={reviews}
              addReview={addReview} 
              currentUser={currentUser} 
              handleDelete={handleDelete}
              setChange={setChange}
              savedMakeup={savedMakeup}
              /> 
              }/>
          <Route path="/review/new" element={<NewReview makeup={makeupApi} sendMakeup={sendMakeup} currentUser={currentUser} change={change} setChange={setChange}/>}/>
      </Routes>
    </div>
  );
}

export default App;
