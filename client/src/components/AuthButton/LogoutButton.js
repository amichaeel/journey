import "./AuthButton.css";

function LogoutButton(props) {
  const { logout, isAuthenticated } = props;
  {
    console.log("Authenticated logout component: ", isAuthenticated);
  }

  return (
    isAuthenticated && (
      <button className="AuthButton" onClick={logout}>
        Log Out
      </button>
    )
  );
}

export default LogoutButton;
