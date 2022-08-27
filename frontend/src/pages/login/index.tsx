import LoginFooter from "../../components/login/footer";
import LoginForm from "../../components/login/login-form";
import RegisterForm from "../../components/login/register-form";

const Login = () => {
  return (
    <div className="login">
      <div className="login_wrapper bg-bg__secondary max-h-screen lg:overflow-hidden overflow-auto">
        <LoginForm />
        <RegisterForm />
        <LoginFooter />
      </div>
    </div>
  );
};

export default Login;
