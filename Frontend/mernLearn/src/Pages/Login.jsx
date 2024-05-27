import { useState } from "react";
import {useNavigate} from "react-router-dom"

const URL = "http://localhost:3000/api/auth/login"


const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value

    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(user)
      })

      console.log("login: ",response);

      if(response.ok) {
        alert('login successfully')
        setUser({email: "",  password:" "})
        navigate("/")
      }
    } catch (error) {
      console.log("login: ", error);
    }
  }

  return (
    <section>
      <main>
        <div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <img src="login.png" alt="login page" />
            </div>
            <div className="mt-5">
              <h1 className="text-2xl font-bold">Login Page</h1>
              <br />
              <form onSubmit={handleSubmit}>


                <div className="mb-5">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 "
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="email"
                    name="email"
                    placeholder="email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>


                <div className="mb-5">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 "
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    name="password"
                    placeholder="password"
                    id="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>


                <br />

                <button className="bg-teal-100 px-2 py-2">Register Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
