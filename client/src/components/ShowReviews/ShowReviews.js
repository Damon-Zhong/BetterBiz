import React, {useState, useEffect} from "react";
import Image from "react-bootstrap/Image";
import loadingSpinner from "../../images/loadingSpinner.gif";
import SubmitReviews from '../SubmitReviews/SubmitReviews';
import "./ShowReviews.css";

function ShowReviews({businessId}){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        fetch(`/api/reviews/${businessId}`)
            .then(res => res.json())
            .then(res => {
                setData(res);
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
    
    return(
        <div>
            <div className="line mt-5"></div>
            <div className="container mt-5">
                <h4 className="mb-3">What our users think about this business</h4>
                {!data.length ? <p>This business does not have any reviews yet. If you want to leave a review, please <a href="http://google.ca">sign up or log in</a> and submit a review by clicking on the button below.</p> : null}
                <div id="reviewCards">
                    {data.length ? data.map(review => {
                        return(
                            <div key={review._id} className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{review.review.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Posted by {review.userDetails[0].firstName} on {(new Date(review.createdAt)).toDateString()}</h6>
                                    <p className="card-text">{review.review.body}</p>
                                </div>
                            </div>
                        )
                    }) : null}
                </div>
                <SubmitReviews
                    addReview={review => {
                        setData([
                            review,
                            ...data,
                        ])
                    }}
                    businessId={businessId}
                />
            </div>
        </div>
    )
}

export default ShowReviews;