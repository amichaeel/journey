import {createContext, useContext, useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";

const AuthContext = createContext();
export const useAuth = () => {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const { loginWithRedirect, logout, user, isLoading, error, isAuthenticated } = useAuth0();

    // Redirect to Auth0 login page
    const login = () => {
        loginWithRedirect();
    };

    // Log out using Auth0
    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
    };

    useEffect(() => {
        // Perform any initial setup here
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout: handleLogout, isLoading, isAuthenticated, error }}>
            {children}
        </AuthContext.Provider>
    );
}
