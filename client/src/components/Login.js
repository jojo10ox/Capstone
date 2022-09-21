import { useState } from "react";

function Login({setCurrentUser}) {

  

    const [formData, setFormData] = useState({
        username: "",
        password: "",
      })

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    // console.log(formData)

    function handleSubmit(e){
        e.preventDefault()

        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }).then((res) => {
            if (res.ok) {
              res.json().then((user) => {
                setCurrentUser(user);
              });
            } else {
              res.json().then((errors) => {
                console.error(errors);
              });
            }
          });
        };

    const handleLogout = () => {
      fetch('/logout', {method: "DELETE"})
      .then(res => {
            if (res.ok) {
              setCurrentUser(null)
            }
          })
    }
    

    return(
      <div>
        <div>
          <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                id="username-input"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <label htmlFor="password">Password:</label>
              <input
                id="password-input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="submit">Submit</button>
            </form>
        </div>
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
     
  
        
    )
}

export default Login;