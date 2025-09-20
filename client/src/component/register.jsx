import {useState} from 'react'
import { Link } from 'react-router';
import axios from 'axios'
import { useNavigate } from 'react-router';

function Register() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [Password, setPassword] = useState()
  const [PasswordConfirm, setPasswordConfirm] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:5000/Register", { name, email, Password, PasswordConfirm })
    .then(result => {console.log(result)
      navigate('/Login')
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="min-h-screen flex flex-col justify-around items-center">
      <div className="">
        <div className="">
          <h1 className="text-[4rem] mb-[1rem] text-[#08e408]">Register</h1>
        </div>
        {/* essage */}
        <form
          onSubmit={handleSubmit}
          className=" h-[25rem] bg-[#ffffff4b] border-none rounded-2xl flex flex-col justify-around items-center"
        >
          <div className="self-start px-[1rem] w-full">
            <label>Name</label>
            <input
              type="name"
              name="name"
              className="bg-[#0080006e] w-full   p-[0.5rem] rounded-[8px] text-white outline-none"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="self-start px-[1rem] w-full">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="bg-[#0080006e] w-full   p-[0.5rem] rounded-[8px] outline-none"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="self-start px-[1rem] w-full">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="bg-[#0080006e] w-full  p-[0.5rem] rounded-[8px] outline-none"
              placeholder="Create Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="self-start px-[1rem] w-full">
            <label>Confirm Password</label>
            <input
              type="password"
              name="password2"
              className="bg-[#0080006e] w-full  p-[0.5rem] rounded-[8px] outline-none"
              placeholder="Confirm Password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-[#08df08c4] w-[30%] h-[2rem] rounded-2xl font-bold cursor-pointer active:bg-[#0080006e] "
          >
            Register
          </button>
        </form>
        <p className="lead mt-4">
          Have An Account?{" "}
          <Link to="/Login" className="hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register

