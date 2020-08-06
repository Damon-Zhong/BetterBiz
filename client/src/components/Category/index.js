import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Category = ({match}) => {
    const [businessList, setBusinessList] = useState([])

    useEffect(() => {
        async function initCategoryPage( category ){
            const DBresult = await axios.get(`/api/businesses/${category}`)
            console.log( DBresult.data )
            setBusinessList(DBresult.data)
        }
        initCategoryPage(match.params.category)
    }, []);
    
    return (
        <div className='container'>
            <h3 className='mt-2 mb-2'>{match.params.category.toUpperCase()}</h3>
            {businessList.map( (business, index) => 
            <div key={index} className="card mt-3">
                <img src={business.image} className="card-img-top col-4" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{business.name}</h5>
                    <ul>
                        <li><i>Highlights:</i>{business.highlight.map(each => <strong>{each}</strong>)}</li>
                        <li><i>Website:</i>{business.website}</li>
                    </ul>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href={`/businesses/${business.url}`} className="btn btn-primary">Business Detail</a>
                </div>
            </div>)}
        </div>
    )
}

export default Category;
