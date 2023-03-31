import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "./AuthContext";

function Navbar() {
  const { logout } = useContext(AuthContext);

  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;

  const triggerLogout = () => {
    logout();
  };

  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-orange-300 flex h-12 px-6 py-2 justify-around" >
      <div className="text-left">
        <span className="font-bold text-black  text-xl flex-shrink-0">
          <FontAwesomeIcon icon={faPlaneDeparture} />
          <span className="ml-4">EPIC TOURS</span>
        </span>
      </div>
      <div className="pl-20 justify-evenly underline-offset-0
">
        <div className=" flex text-center  mx-9">
          <Link
            to="/"
            className="px-3 py-2 rounded-md text-sm  font-bold text-black hover:bg-purple-500 hover:text-white"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="ml-4 px-3 py-2 rounded-md text-sm font-bold text-black hover:bg-purple-500 hover:text-white"
          >
            ABOUT
          </Link>

          {}

          {isLoggedIn ? (
              <>
                {/* <Link to="/">Home</Link> */}

                <Link
                  to="/contactus"
                  className="ml-4 px-3 py-2 rounded-md text-sm font-bold text-black hover:bg-purple-500 hover:text-white"
                >
                  CONTACTS
                </Link>
                <Link onClick={triggerLogout}>
                  <button className="ml-4 px-10 py-2 rounded-md text-sm font-bold text-black hover:bg-purple-500 hover:text-white">Logout</button>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="ml-4 px-10 py-2 rounded-md text-xs font-bold text-black hover:bg-purple-500 hover:text-white"
                >
                  LOGIN
                </Link>
                <Link
                  to="/signup"
                  className="ml-4 px-3 py-2 rounded-md text-xs font-bold text-black hover:bg-purple-500 hover:text-white"
                >
                  SIGN UP
                </Link>
              </>
            )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
