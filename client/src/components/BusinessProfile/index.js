import React from 'react'

const BusinessProfile = (props) => {
    return (
        <div className="card mt-3">
            <img src={props.image} className="card-img-top col-4" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <ul>
                    <li><i>Highlights:</i>{props.highlight.map(each => <strong>{each}</strong>)}</li>
                    <li><i>Website:</i>{props.website}</li>
                </ul>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href={`/businesses/${props.url}`} className="btn btn-primary">Business Detail</a>
            </div>
        </div>
    )
}

export default BusinessProfile;
