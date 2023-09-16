import "./NavButton.css";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className="navbutton" onClick={() => logout()}>
        Logout
      </button>
    )
  );
}

export default LogoutButton;
