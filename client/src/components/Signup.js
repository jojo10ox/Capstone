import { useState } from "react";

function Signup({setCurrentUser}){
    

    const[errors, setErrors] = useState([])

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
              setCurrentUser(user);
            });
          } else {
            res.json().then((json) => setErrors(json.errors));
          }
        });
      }

    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username-signup-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email-signup-input"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password-signup-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        {errors ? <div>{errors}</div> : null}
      </form>
    );
}
export default Signup