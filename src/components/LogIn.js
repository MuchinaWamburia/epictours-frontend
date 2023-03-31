
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import {useContext, useState} from 'react'
import {AuthContext} from './AuthContext'
import { Link } from "react-router-dom";



function LogIn() {

     const {login} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }




  return (
    <div className="" style={{backgroundImage: `url('./bg2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* <h1 className="text-center pt-5 text-2xl font-bold text-black">Epic Tours</h1> */}
      <div className='text-center'>
        <Link to="/">
            <span className=" text-black font-bold  text-2xl flex-shrink-0">
              <FontAwesomeIcon icon={faPlaneDeparture}  />
              <span className="ml-4">EPIC TOURS</span>
              </span>
        </Link>
      </div>
      <div className=" flex flex-col min-h-screen items-center  ">
        <form
         onSubmit={handleSubmit}

        className="flex flex-col pt-10 px-4 py-5 bg-white border-2 border-blue-900 mt-20 rounded">

          <h1 className="text-2xl font-bold text-left pb-3">Login</h1>
          <label className="py-2 font-semibold">Email</label>
          <input
    value={email}
          onChange={(e) => setEmail(e.target.value)}
           className="border-2 rounded-md border-gray-300" type="email" />
          <label className="py-2 font-semibold">Password</label>
          <input
         value={password}
          onChange={(e) => setPassword(e.target.value)}
            className="border-2 rounded-md border-gray-300"
            type="password"
          />
          <button
            className="bg-purple-900 hover:bg-purple-500 text-white my-5 p-1 rounded-md mx-20"
            type="submit bg-black-200 "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
