import "./TopNavBar.css";
import LoginButton from "../NavButton/LoginButton";
import SignupButton from "../NavButton/SignupButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../NavButton/LogoutButton";
import Spinner from "../Spinner/Spinner"

function TopNavBar() {
    const { isLoading, error } = useAuth0();
    return (
        <nav class="navbar navbar-top">
            <h1 class="navtitle">Journey</h1>
            <ul class="navmenu">
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
