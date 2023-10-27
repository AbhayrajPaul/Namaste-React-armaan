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
      <div className="h-[100vh] w-[100%] bg-pink-300 px-[10rem] py-[10rem] flex">
        <div className="text-6xl w-[50%] bg-red-400 h-full">
          <h1>Welcome Back.....</h1>
          <h1>We missed you</h1>
        </div>
        <form
          className="w-[50%] h-full bg-blue-300 flex flex-col gap-4"
          onSubmit={formik.handleSubmit}
        >
          <div>
            <label htmlFor="username">Username </label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
              onBlur={formik.handleBlur}
            />
            {formik.errors.username && formik.touched.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password">Password </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            ></input>
            {formik.errors.password && formik.touched.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className="bg-blue-700 text-white w-fit px-7 ">
            LogIn
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
