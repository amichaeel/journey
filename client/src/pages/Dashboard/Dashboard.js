import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import DashboardSearch from "../../components/DashboardSearch/DashboardSearch";
import Spinner from "../../components/Spinner/Spinner"

function Dashboard() {
    const { isAuthenticated, error, isLoading } = useAuth0();
    return (
        <div>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <Spinner />}
        {!error && !isLoading && (
            <>
            <DashboardSearch />
            </>
        )}
        </div>
    );
}

export default Dashboard;
