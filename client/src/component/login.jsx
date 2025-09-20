import {useState} from 'react'
import { Link, useNavigate } from 'react-router';
import axios from 'axios'


function Login() {
const [email, setEmail] = useState()
const [Password, setPassword] = useState()
const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5000/Login", { email, Password})
    .then(result => {
      console.log(result)
      if(result.data === "success"){
        navigate('/Home')
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className=" min-h-screen flex flex-col justify-around items-center">
      <div className=" ">
        <div className="">
          <h1 className=" text-[4rem] mb-[1rem] text-[#08e408]">Login</h1>
        </div>
        {/* message  */}
        <form
          action="/users/login"
          method="POST"
          className="h-[15rem] w-[30rem] bg-[#ffffff4b] border-none rounded-2xl flex flex-col justify-around items-center"
        >
          <div className=" self-start px-[1rem] w-full">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="bg-[#0080006e] w-full   p-[0.5rem] rounded-[8px] outline-none"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="self-start px-[1rem] w-full">
            <label>Password:</label>
            <input
              type="password"
              className="bg-[#0080006e] w-full  p-[0.5rem] rounded-[8px] outline-none "
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-[#08df08c4] w-[20%] h-[2rem] rounded-2xl font-bold cursor-pointer active:bg-[#0080006e] "
          >
            Login
          </button>
        </form>
        <p className="lead mt-4">
          No Account?{" "}
          <Link to="/Register" className="hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login

