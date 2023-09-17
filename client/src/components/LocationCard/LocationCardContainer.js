import "./LocationCard.css"
import LocationCard from "./LocationCard";
function LocationCardContainer({locations}){
    return(
        <div className="location-card-container">
            <div className="scrolling-wrapper">
                {locations.map((location, index) => (
                    <LocationCard key={index} location={location} />
                ))}
            </div>
        </div>
    )
}
export default LocationCardContainer;