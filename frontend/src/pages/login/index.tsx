import LoginFooter from "../../components/login/footer";
import LoginForm from "../../components/login/login-form";

const Login = () => {
  return (
    <div className="login">
      <div className="login_wrapper bg-bg__secondary">
        <LoginForm />
        <div className="register"></div>
        <LoginFooter />
      </div>
    </div>
  );
};

export default Login;
