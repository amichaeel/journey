import "./AuthButton.css";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="AuthButton" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  );
}

export default LoginButton;
