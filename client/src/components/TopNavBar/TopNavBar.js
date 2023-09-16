import NavButton from '../NavButton/NavButton';
import './TopNavBar.css'

function TopNavBar() {
  return (
    <nav class="navbar navbar-top">
      <h2>Journey</h2>
      <ul class="navmenu">
        <NavButton text={'Login'} />
        <NavButton text={'Sign Up'} />
      </ul>
    </nav>
  );
}

export default TopNavBar;
