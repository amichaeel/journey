import './NavButton.css'

function LoginButton(props) {
  const { login, isAuthenticated } = props;
    {console.log("Authenticated login component: ", isAuthenticated)}
  return (
    !isAuthenticated && (
      <button className="navbutton" onClick={login}>
        Log In
      </button>
    )
  );
}

export default LoginButton;
