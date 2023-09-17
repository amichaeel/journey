import React, {useState, useEffect} from 'react';
import "./LocationCard.css"
import axios from "axios";
const LocationCard = ({location}) => {
    const [imgUrl, setImgUrl] = useState('')
    console.log("LOCATION PROPS: ",location);
    useEffect(()=>{
        async function getImg() {
            try {
                const key = process.env.REACT_APP_FOURSQUARE_KEY;
                const foursquarePlaceImgUrl = `https://api.foursquare.com/v3/places/${location.img}/photos`;

                const res = await axios.get(foursquarePlaceImgUrl, {
                    headers: {
                        Authorization: key,
                    },
                    params: {
                        limit: 1,
                    },
                });

                if (res.data && res.data.length > 0) {
                    const prefix = res.data[0].prefix;
                    const height = res.data[0].height;
                    const width = res.data[0].width;
                    const suffix = res.data[0].suffix;

                    const imgUrl = `${prefix}${height}x${width}${suffix}`;
                    console.log("Swag URL: ", imgUrl)
                    setImgUrl(imgUrl);
                }
            } catch (err) {
                console.log(err);
            }
        }

        getImg();
    },[])
    return(
        <div className="location-card">
            <img src={imgUrl} alt={location.name} />
            <h3>{location.name}</h3>
            <p>{location.location.address}</p>
            {/* You can add more fields as needed */}
        </div>
    )
}
export default LocationCard;