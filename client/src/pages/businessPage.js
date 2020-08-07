import React, {useState, useEffect} from "react";
import BusinessImage from "../components/BusinessImage/BusinessImage";
import BusinessSummary from "../components/BusinessSummary/BusinessSummary";
import BusinessHighlights from "../components/BusinessHighlights/BusinessHighlights";
import ShowReviews from "../components/ShowReviews/ShowReviews";
import Image from "react-bootstrap/Image";
import ClaimBusiness from "../components/ClaimBusiness/ClaimBusiness";
import loadingSpinner from "../images/loadingSpinner.gif";

function BusinessPage({match}){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [errors, setErrors] = useState(false);

    const array = ["Restaurants", "Restaurant", "Shop", "Shops"];

    useEffect(() => {
        fetch(`/api/businesses/${match.params.businessName}`)
            .then(res => res.json())
            .then(res => {
                setData({betterBiz: res.businessData, yelp: res.yelpData});
                setLoading(false);
            })
            .catch(() => {
                setErrors(true);
                setLoading(false);
            });
    },[])

    console.log(data);

    if(loading){
        return (
            <div className="container mt-5">
                <Image src={loadingSpinner} style={{margin: "0 auto", width: "100px", display: "block" }}/>
            </div>
        )
    } else if(errors){
        return(
            <div className="container">
                <h2>Oh no, there has been an error!</h2>
                <p>Please go back and try again.</p>
            </div>
        )
    }

    return (
    <div>
        <BusinessImage imageUrl={data.yelp.image_url} />
        <BusinessSummary name={data.betterBiz.name} summary={data.betterBiz.summary} address={data.yelp.location.display_address} website={data.betterBiz.website} phone={data.yelp.phone} highlights={data.betterBiz.highlight}/>
        {array.includes(data.betterBiz.busType) ? <BusinessHighlights ownDelivery={data.betterBiz.ownDelivery} website={data.betterBiz.website} phone={data.yelp.phone} /> : null}
        <ShowReviews businessId={data.betterBiz._id}/>
        <ClaimBusiness />
    </div>
    )
}

export default BusinessPage;