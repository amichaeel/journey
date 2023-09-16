import { useAuth0 } from "@auth0/auth0-react";


function Dashboard() {
    const { isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <p>User is Authentic</p>
        ) || (
            <p>User does not exist</p>
        )
    );
}

export default Dashboard;
