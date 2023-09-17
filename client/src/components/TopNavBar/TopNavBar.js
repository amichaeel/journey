import "./TopNavBar.css";
import LoginButton from "../AuthButton/LoginButton";
import LogoutButton from "../AuthButton/LogoutButton";
import Spinner from "../Spinner/Spinner";
import { useAuth } from "../../context/AuthContext";

function TopNavBar() {
  const { isLoading, error, isAuthenticated, login, logout, user } = useAuth();
  return (
    <nav className="navbar">
      <div className="nav-contents maxxed-container">
        <svg className="navtitle"></svg>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <Spinner />}
        {!error && !isLoading && (
          <>
            {/* <h1>{(user !== undefined) ? user.name : ""}</h1> */}
            <LoginButton isAuthenticated={isAuthenticated} login={login} />
            <LogoutButton isAuthenticated={isAuthenticated} logout={logout} />
          </>
        )}
      </div>
    </nav>
  );
}

export default TopNavBar;
