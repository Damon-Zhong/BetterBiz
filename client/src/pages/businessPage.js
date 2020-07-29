import React from "react";
import BusinessImage from "../components/BusinessImage/BusinessImage";
import BusinessSummary from "../components/BusinessSummary/BusinessSummary";
import BusinessHighlights from "../components/BusinessHighlights/BusinessHighlights";
import ShowReviews from "../components/ShowReviews/ShowReviews";
import SubmitReviews from "../components/SubmitReviews/SubmitReviews";

function BusinessPage(){
    return (
    <div>
        <BusinessImage />
        <BusinessSummary />
        <BusinessHighlights />
        <ShowReviews />
        <SubmitReviews />
    </div>
    )
}

export default BusinessPage;