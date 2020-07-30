//config env credentials
require('dotenv').config()
import axios from 'axios'
//create yelp API client
const client = require('yelp-fusion').client(process.env.yelp_API_key)
const AuthStr = `Bearer ${process.env.yelp_API_key}`

//!TODO implement changes from input
const Yelp = {
    // setSearchRequest: async (queryObj) =>{

    // },
    generalSearch: async (location='Toronto', query) => {
        console.log('General Search...')
        const url = `https://api.yelp.com/v3/businesses/search?location=${location}&term=${query}`
        const resultList = await axios.get(url, { headers: { Authorization: AuthStr } } )
        // const searchRequest = {
        //     location:'Toronto',
        //     limit:10
        // }
        // const resultList = await client.search(searchRequest)
        //     .then( res => res.jsonBody.businesses )
        //     .catch( e => console.log(e) )
        return resultList
    },

    getBusById: async (id) => {
        console.log(`[getBusById] get business information by ID: ${id}`)
        const url = `https://api.yelp.com/v3/businesses/${id}`
        const resultList = await axios.get(url, { headers: { Authorization: AuthStr } } )
        // const searchRequest = {
        //     location,
        //     name
        // }
        // const resultList = await client.search(searchRequest)
        //     .then( res => res.jsonBody.businesses )
        //     .catch( e => console.log(e) )
        return resultList
    },
    yelpBusinessResult: async (yelpID) => {
        // yelpIdawait client.search({
        //     term:'Pai Northern Thai Kitchen',
        //     location: 'Toronto, Ontario, Canada'
        // })
        // .then( res => console.log('business', res.jsonBody))
        // .catch(e => {
        //     console.log(e);
        // });

        const businessResult = await client.business('pai-northern-thai-kitchen-toronto-5')
            .then( res => res.jsonBody )
            .catch(e => {
                console.log(e);
            })
        return businessResult;
    }


}

module.exports = Yelp

//  const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);