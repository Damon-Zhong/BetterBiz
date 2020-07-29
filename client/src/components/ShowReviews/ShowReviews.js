import React from "react";

function ShowReviews(){
    return(
        <div className="container mt-5">
            <hr className="mb-5"></hr>
            <h4>What our users think about this business</h4>
            <p>This business does not have any reviews yet. If you want to leave a review, please <a>sign up or log in</a> and submit a review.</p>
            <div id="reviewCards">
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Relaxed atmosphere, super friendly service!</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Posted by Matt on July 30, 2020</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Relaxed atmosphere, super friendly service!</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Posted by Matt on July 30, 2020</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Relaxed atmosphere, super friendly service!</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Posted by Matt on July 30, 2020</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowReviews;