import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import DashboardSearch from "../../components/DashboardSearch/DashboardSearch";
import Spinner from "../../components/Spinner/Spinner"
import DashboardContainer from "../../components/DashboardContainer/DashboardContainer";
import "./Dashboard.css"

function Dashboard() {
    const { isAuthenticated, error, isLoading } = useAuth0();
    return (
        <div class="dashboard">
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <Spinner />}
        {!error && !isLoading && (
            <>
            <DashboardContainer />
            </>
        )}
        </div>
    );
}

export default Dashboard;
