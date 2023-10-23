import { useState } from "react";
import Logo from "../assets/img/unnamed.png";
import { Link } from "react-router-dom";

function isLoggedIn() {
  // api call for authennticatin
  return true;
}

const Header = () => {
  const [loginStatus, setLoginStatus] = useState(isLoggedIn);
  function changeStatus() {
    setLoginStatus(!loginStatus);
  }
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1> Foodvilla</h1>
          {/* <img className="logo" src={Logo} /> */}
        </div>
        <div className="items">
          <ul>
            <li>
              {" "}
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>

        {loginStatus ? (
          <button
            onClick={() => {
              changeStatus();
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              changeStatus();
            }}
          >
            Log In
          </button>
        )}
      </div>
    </>
  );
};
export default Header;
