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
    }, [])

    const getSavedMakeup = () => {
      fetch('/makeups')
      .then(res=>res.json())
      .then(data=>setSavedMakeup(data))

    }
    
    useEffect(() => {getSavedMakeup()}, [])

    //add review to new makeup
    const handleFirstReview = (newMakeup, name) => {
      setSavedMakeup([...savedMakeup.filter(makeup => makeup.name !== name), newMakeup])
    }

    // add review
    const addReview = (newReview, makeupId) => {
      const copyOfMakeup = [...savedMakeup]
      const makeup_index = copyOfMakeup.findIndex((makeupObj) => makeupObj.id === makeupId)
      copyOfMakeup[makeup_index].reviews = [...copyOfMakeup[makeup_index].reviews, newReview]
      setSavedMakeup(copyOfMakeup)
      // setSavedMakeup([...savedMakeup, newReview])
    
    }

    //delete review
    const deleteReview = (reviewToDelete, makeupId) => {
      const copyOfMakeup = [...savedMakeup]
      const makeup_index = copyOfMakeup.findIndex((makeupObj) => makeupObj.id === makeupId)
      copyOfMakeup[makeup_index].reviews = copyOfMakeup[makeup_index].reviews?.filter(review => review.id !== reviewToDelete.id)
      setSavedMakeup(copyOfMakeup)
    }
 
     

    const handlePatch = (updatedReview, makeupId) => {
      const copyOfMakeup = [...savedMakeup]
      const makeup_index = copyOfMakeup.findIndex((makeupObj) => makeupObj.id === makeupId)
      copyOfMakeup[makeup_index].reviews = copyOfMakeup[makeup_index].reviews?.map((review) =>
      review.id === updatedReview.id ? updatedReview : review)
      setSavedMakeup(copyOfMakeup)
    }

  

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
              setChange={setChange}
              savedMakeup={savedMakeup}
              handlePatch={handlePatch}
              deleteReview={deleteReview}
          

              /> 
              }/>
          <Route path="/review/new" element={<NewReview handleFirstReview={handleFirstReview} makeup={makeupApi} sendMakeup={sendMakeup} currentUser={currentUser} change={change} setChange={setChange}/>}/>
      </Routes>
    </div>
  );
}

export default App;
