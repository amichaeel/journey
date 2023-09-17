import "./TopNavBar.css";
import LoginButton from "../AuthButton/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../AuthButton/LogoutButton";
import Spinner from "../Spinner/Spinner";

function TopNavBar() {
  const { isLoading, error } = useAuth0();
  return (
    <nav className="navbar navbar-top">
      <ul className="nav-contents maxxed-container">
        <h1 className="navtitle">
          <span class="material-symbols-outlined">hiking</span> Journey
        </h1>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <Spinner />}
        {!error && !isLoading && (
          <>
            <LoginButton />
            <LogoutButton />
          </>
        )}
      </ul>
    </nav>
  );
}

export default TopNavBar;
