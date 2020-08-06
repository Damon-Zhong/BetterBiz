import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './category.css'

const Category = ({match}) => {
    const [businessList, setBusinessList] = useState([])

    useEffect(() => {
        async function initCategoryPage( category ){
            const DBresult = await axios.get(`/api/overview/${category}`)
            console.log( DBresult.data )
            setBusinessList(DBresult.data)
        }
        initCategoryPage(match.params.category)
    }, []);
    
    return (
        <div className='container'>
            <h3 className='mt-3 mb-3'>{match.params.category.toUpperCase()}</h3>
            {businessList.map( (business, index) => 
            <div key={index} className="card mt-3 ml-2 col-md-4 d-inline-block">
                <div className='bus-image'>
                    <img src={business.image ? business.image : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483296.jpg%27%7D"} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{business.name}</h5>
                    <ul>
                        <li><strong>Highlights: </strong>{business.highlight.join(',')}</li>
                        <li><strong>Website: </strong><a href={business.website}>{business.website}</a></li>
                    </ul>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href={`/businesses/${business.url}`} className="btn btn-primary">Business Detail</a>
                </div>
            </div>)}
        </div>
    )
}

export default Category;
