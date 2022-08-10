import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login_wrapper bg-bg__secondary">
        <div className="login_wrap h-[78vh] text-color__primary">
          <div className="login-1 w-80 mx-auto">
            <img src="/icons/facebook.svg" alt="facebook logo" />
            <span className="text-[1.25rem]">
              Facebook helps you connect and share with the people in your life
            </span>
          </div>
          <div className="login-2 text-center">
            <div className="login-2_wrap flex flex-col items-center gap-4 bg-primary shadow-md p-4 pb-8 w-96 h-fit mx-auto rounded-lg my-4">
              <Formik
              initialValues={{sl:""}}

                onSubmit={()=>{}}
              >
                <Form>
                  <input type="text" />
                  <input type="text" />
                  <button className="button_presets w-full h-12 text-base font-semibold select-none" type="submit">Log In</button>
                </Form>
              </Formik>
              <Link className="text-blue__color text-sm cursor-pointer hover:underline" to="/forgot">Forgot password?</Link>
              <div className="line_splitter divide-y-2 bg-bg__third w-full h-[0.2px]"></div>
              <button className="button_presets bg-green__color w-3/4 font-semibold text-base mt-4">Create Account</button>
            </div>
            <Link className="text-base" to="">
              <strong>Create a page</strong>
              for a celebrity, brand or business
            </Link>
          </div>
        </div>
        <div className="register"></div>
      </div>
    </div>
  );
};

export default Login;
