import React, {useState, useEffect} from 'react'
import BusinessProfile from '../BusinessProfile'
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
            {businessList.map( (business, index) => <BusinessProfile key={index} {...business}/>)}
        </div>
    )
}

export default Category;
