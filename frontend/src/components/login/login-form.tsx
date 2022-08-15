import { Form, Formik, FormikProps } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../inputs/login-input";
import * as Yup from "yup";

interface LoginFormState {
  email: string;
  password: string;
}

const initialValues: LoginFormState = {
  email: "",
  password: "",
};

const onSubmit = (values: LoginFormState) => {};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email address is required!")
    .email("Must be a valid email"),
  password: Yup.string().required("Password is required!"),
});

const LoginForm = () => {
  return (
    <div className="login_wrap h-[78vh] text-color__primary md:flex md:items-center md:max-w-5xl md:mx-auto">
      <div className="login-1 w-80 mx-auto md:flex md:flex-col md:w-1/2 md:mb-[15vh]">
        <img
          className="md:w-[300px] md:-ml-[1.7rem]"
          src="/icons/facebook.svg"
          alt="facebook logo"
        />
        <span className="md:text-[1.25rem] font-semibold md:textlg">
          Facebook helps you connect and share with the people in your life
        </span>
      </div>
      <div className="login-2 text-center">
        <div className="login-2_wrap flex flex-col items-center gap-4 bg-primary shadow-md p-4 pb-8 w-96 h-fit mx-auto rounded-lg my-4">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(props: FormikProps<LoginFormState>) => (
              <Form>
                <LoginInput
                  type="text"
                  name="email"
                  placeholder="Enter your address or phone number"
                />
                <LoginInput
                  type="password"
                  name="password"
                  autoComplete=""
                  placeholder="Enter your password"
                  bottom={true}
                />
                <button
                  className="button_presets w-full h-12 text-base font-semibold select-none"
                  type="submit"
                >
                  Log In
                </button>
              </Form>
            )}
          </Formik>
          <Link
            className="text-blue__color text-sm cursor-pointer hover:underline"
            to="/forgot"
          >
            Forgot password?
          </Link>
          <div className="line_splitter divide-y-2 bg-bg__third w-full h-[0.2px]"></div>
          <button className="button_presets bg-green__color w-3/4 font-semibold text-base mt-4">
            Create Account
          </button>
        </div>
        <Link className="text-base" to="/">
          <strong>Create a page </strong>
          for a celebrity, brand or business
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
