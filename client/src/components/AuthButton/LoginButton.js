import { getMaterialIcon } from "../../helpers";
import "./AuthButton.css";

function LoginButton(props) {
  const { login, isAuthenticated } = props;
  {
    console.log("Authenticated login component: ", isAuthenticated);
  }
  return (
    !isAuthenticated && (
      <button className="AuthButton" onClick={login}>
        Log In
      </button>
    )
  );
}

export default LoginButton;
