import { useState} from "react";
import { useNavigate } from "react-router-dom";

function Login({setCurrentUser}) {

   const[errors, setErrors] = useState([])
   const history = useNavigate()

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
        e.target.reset()
       

        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
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
      
        };

        

    // const handleLogout = () => {
    //   fetch('/logout', {method: "DELETE"})
    //   .then(res => {
    //         if (res.ok) {
    //           setCurrentUser(null)
    //         }
    //       })
    // }
    

    return(
      <div>
        <div>
          <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input className="text-black border"
                id="username-input"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <label htmlFor="password">Password:</label>
              <input className="text-black border"
                id="password-input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button className="px-2 py-1 text-white border  bg-rose-500 hover:bg-transparent hover:text-rose-600 rounded-md" type="submit">Submit</button>
            </form>
        </div>
        <div>
            {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
        {errors ? <div>{errors}</div> : null}
      </div>
     
  
        
    )
}

export default Login;