import './TopNavBar.css'
import LoginButton from '../NavButton/LoginButton';
import SignupButton from '../NavButton/SignupButton';

function TopNavBar() {
  return (
    <nav class="navbar navbar-top">
      <h1 class="navtitle">Journey</h1>
      <ul class="navmenu">
        <LoginButton />
        <SignupButton />
      </ul>
    </nav>
  );
}

export default TopNavBar;
