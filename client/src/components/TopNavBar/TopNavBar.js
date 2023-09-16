import "./TopNavBar.css";
import LoginButton from "../NavButton/LoginButton";
import LogoutButton from "../NavButton/LogoutButton";
import Spinner from "../Spinner/Spinner"
import {useAuth} from "../../context/AuthContext";

function TopNavBar() {
    const { isLoading, error, isAuthenticated,login, logout, user} = useAuth();
    return (
        <nav className="navbar navbar-top">
            <h1 className="navtitle">Journey</h1>
            <ul className="navmenu">
                {error && <p>Authentication Error</p>}
                {!error && isLoading && <Spinner />}
                {!error && !isLoading && (
                    <>
                        <h1>{(user !== undefined) ? user.name : ""}</h1>
                        <LoginButton isAuthenticated={isAuthenticated} login={login}/>
                        <LogoutButton isAuthenticated={isAuthenticated} logout={logout}/>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default TopNavBar;
