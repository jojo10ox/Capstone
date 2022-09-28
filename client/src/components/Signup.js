import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({setCurrentUser}){
    

    const[errors, setErrors] = useState([])
    const history = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
      });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };


    function handleSubmit(e) {
        e.preventDefault();
        e.target.reset()
    
        const userCreds = { ...formData };
    
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCreds),
        }).then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              setCurrentUser(user) 
              history("/");
            });
          } else {
            res.json().then((json) => setErrors(json.errors));
          }
        });
      }

    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input className="text-black border"
          id="username-signup-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input className="text-black border"
          id="email-signup-input"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input className="text-black border"
          id="password-signup-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="px-2 py-1 text-white border  bg-rose-500 hover:bg-transparent hover:text-rose-600 rounded-md">Submit</button>
        {errors ? <div>{errors}</div> : null}
      </form>
    );
}
export default Signup