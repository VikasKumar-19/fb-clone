import { Form, Formik } from "formik";
import React from "react";
import RegisterInput from "../inputs/register-input";

interface RegisterFormState {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  bYear: string;
  bMonth: string;
  bDay: string;
  gender: string;
}

const initialValues: RegisterFormState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  bYear: "",
  bMonth: "",
  bDay: "",
  gender: "",
};

const RegisterForm = () => {
  return (
    <div className="custom-backdrop__blur ">
      <div className="register absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary shadow-[0_1px_2px] shadow-shadow__1 rounded-lg p-4 pb-4 w-[350px] h-fit text-color__primary">
        <div className="register_header relative flex flex-col gap-3 p-2 border-b border-b-bg__third">
          <i className="exit_icon absolute right-0 cursor-pointer" />
          <span className="font-bold text-3xl">Sign Up</span>
          <span className="text-base text-color__secondary">
            It's quick and easy
          </span>
        </div>
        <Formik initialValues={initialValues} onSubmit={() => {}}>
          {(formik) => (
            <Form className="register_form w-full flex flex-col items-center">
              <div className="regi_line py-2 flex flex-col gap-2">
                <RegisterInput
                  type="text"
                  placeholder="First name"
                  name="first_name"
                />
                <RegisterInput
                  type="text"
                  placeholder="Last name"
                  name="last_name"
                />
              </div>
              <div className="regi_line py-2 flex flex-col gap-2">
                <RegisterInput
                  type="text"
                  placeholder="Mobile number or Email address"
                  name="email"
                />
                <RegisterInput
                  type="password"
                  placeholder="New Password"
                  name="password"
                />
              </div>
              <div className="reg_col relative self-start mb-2 px-2">
                <div className="reg_line_header flex items-center gap-1 text-sm text-color__secondary">
                  Date of birth <i className="info_icon mt-0.5" />
                </div>
                <div className="reg_grid mt-1.5 grid grid-cols-3 gap-2.5 h-9 w-full">
                  <select
                    className="w-24 text-base text-color__primary bg-primary rounded-md cursor-pointer border border-dark_color__secondary outline-none"
                    name="bDay"
                  >
                    <option value="14">14</option>
                  </select>
                  <select
                    className="w-24 text-base text-color__primary bg-primary rounded-md cursor-pointer border border-dark_color__secondary outline-none"
                    name="bMonth"
                  >
                    <option value="14">14</option>
                  </select>
                  <select
                    className="w-24 text-base text-color__primary bg-primary rounded-md cursor-pointer border border-dark_color__secondary outline-none"
                    name="bYear"
                  >
                    <option value="14">14</option>
                  </select>
                </div>
              </div>
              <div className="reg_col relative self-start mb-2 px-2">
                <div className="reg_line_header flex items-center gap-1 text-sm text-color__secondary">
                  Gender <i className="info_icon mt-0.5" />
                </div>
                <div className="reg_grid mt-1.5 grid grid-cols-3 gap-2.5 h-9 w-full">
                  <label className="w-24 flex items-center justify-between text-base text-color__primary rounded-md cursor-pointer border border-dark_color__secondary px-2.5" htmlFor="male">
                    Male
                    <input type="radio" value="male" name="gender" id="male" />
                  </label>
                  <label className="w-24 flex items-center justify-between text-base text-color__primary rounded-md cursor-pointer border border-dark_color__secondary px-2.5" htmlFor="female">
                    Female
                    <input type="radio" value="female" name="gender" id="female" />
                  </label>
                  <label className="w-24 flex items-center justify-between text-base text-color__primary rounded-md cursor-pointer border border-dark_color__secondary px-2.5" htmlFor="custom">
                    Custom
                    <input type="radio" value="custom" name="gender" id="custom" />
                  </label>
                </div>
              </div>
              <div className="reg_infos text-xs mt-2.5 text-color__secondary">
                By clicking Sign Up, you agree to our <span className="text-blue__color">Terms, Data Policy &npsp;</span> and <span className="text-blue__color">Cookie Policy</span> You may receive SMS notifications from us and can opt at any time.
              </div>
              <div className="reg_btn_wrapper w-full flex items-center justify-center mb-2.5 mt-5 ">
                <button className="button_presets w-3/4 bg-green__color open_signup">Sign Up</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
