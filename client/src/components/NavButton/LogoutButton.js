import './NavButton.css'

function LogoutButton(props) {
  const { logout, isAuthenticated } = props;
    {console.log("Authenticated logout component: ", isAuthenticated)}

  return (
    isAuthenticated && (
      <button className="navbutton" onClick={logout}>
        Logout
      </button>
    )
  );
}

export default LogoutButton;
