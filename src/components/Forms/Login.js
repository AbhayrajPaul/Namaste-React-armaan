import { Formik, useFormik } from "formik";
import { DefaultUsername, DefaultPassword } from "../constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  let loggedIn = false;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username can't be empty";
    }
    if (!values.password) {
      errors.password = "password toh daaal beyy";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      checkCredentials();
    },
  });

  useEffect(() => {
    setUsername(formik.values.username);
    setPassword(formik.values.password);
  }, [formik]);

  function checkCredentials() {
    if (username == DefaultUsername && password.toString() == DefaultPassword) {
      console.log("logged in");
      loggedIn = true;
    } else {
      console.log("invalid username or password");
      loggedIn = false;
    }
  }
  return (
    <>
      <div className="h-[100vh] w-[100%] bg-primaryLight px-[10rem] py-[10rem] flex justify-center gap-5 items-center flex-col">
        <span className="text-5xl"> kya karoge login karke ?</span>

        <button className="bg-pinkish text-[#f1f1f1] text-3xl rounded-xl px-[1rem] py-[.5rem]">
          <Link to={"/"}> idhar click karo</Link>
        </button>
      </div>
    </>
  );
};

export default Login;
