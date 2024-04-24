import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async ()=> {
    try {
      await logOut();
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
        <Link to={"/"}>
        <h1 className="uppercase font-nsans-bold text-red-600 text-5xl cursor-pointer">netflix</h1>
        </Link>

        { user?.email ? (
          <div>
          <Link to={"/profile"}>
             <button className="capitalize pr-4">profile</button>
          </Link>
      
            <button onClick={handleLogout} className="capitalize bg-red-600 rounded px-6 py-2 cursor-pointer">Logout</button>
          </div>
        ) : (
          <div>
            <Link to={"/login"}>
                <button className="capitalize pr-4">Login</button>
            </Link>
        
            <Link to={"/signup"}>
                <button className="capitalize bg-red-600 rounded px-6 py-2 cursor-pointer">Sign up</button>
            </Link>
        </div>
        ) }

    </div>
  )
}

export default Navbar