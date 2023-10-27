import { useState } from "react";
// import Logo from "../assets/img/unnamed.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

function isLoggedIn() {
  // api call for authennticatin
  return false;
}

const Header = () => {
  const [loginStatus, setLoginStatus] = useState(isLoggedIn);
  function changeStatus() {
    setLoginStatus(!loginStatus);
  }
  const onlineStatus = useOnlineStatus();
  return (
    <>
      <div className="navbar  w-[100%] flex justify-between px-[5rem] py-[1rem] bg-[#4a5759]">
        <div className="logo text-white">
          <h1 className="text-3xl font-[700] "> Foodvilla</h1>
          {/* <img className="logo" src={Logo} /> */}
        </div>
        <div className="items ">
          <ul className="flex gap-[2rem] text-xl text-white">
            <li>
              <Link to={"/clothesvilla"}> ClothesVilla</Link>
            </li>
            <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
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
            <li>
              {loginStatus ? (
                <button
                  onClick={() => {
                    changeStatus();
                  }}
                >
                  Log Out
                </button>
              ) : (
                <Link to={"/login"}>
                  <button
                    onClick={() => {
                      changeStatus();
                    }}
                  >
                    Log In
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
