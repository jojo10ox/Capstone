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
        {/* <div>
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
        </div> */}
       
        <div>
        <div>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign In</h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form className="mb-0 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Username</label>
                <div className="mt-1">
                  <input  autoComplete="email"  required
                 id="username-input"
                 type="text"
                 name="username"
                 value={formData.username}
                 onChange={handleChange}/>
                </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="mt-1">
                    <input autoComplete="current-password" required
                    id="password-input"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                     />
                  </div>
                </div>
                <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  bg-rose-500 hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
                {errors ? <div>{errors}</div> : null}
              </div>
            </form>
            </div>
            </div>
          </div>
          </div>
          </div>
      </div>
     
  
        
    )
}

export default Login;