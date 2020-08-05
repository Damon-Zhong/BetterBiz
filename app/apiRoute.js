//config env credentials
require('dotenv').config()
const axios = require('axios')
//create yelp API client
const client = require('yelp-fusion').client(process.env.yelp_API_key)
const AuthStr = `Bearer ${process.env.yelp_API_key}`
const Geocode = require('react-geocode')

//!TODO implement changes from input
const Yelp = {
    // autoComplete: async (term) => {

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
    yelpBusinessResult: async (yelpId) => {
        // yelpIdawait client.search({
        //     term:'Pai Northern Thai Kitchen',
        //     location: 'Toronto, Ontario, Canada'
        // })
        // .then( res => console.log('business', res.jsonBody))
        // .catch(e => {
        //     console.log(e);
        // });

        const businessResult = await client.business(yelpId)
            .then( res => res.jsonBody )
            .catch(e => {
                console.log(e);
            })
        return businessResult;
    },
    getSuggestionList: async (busInfo) => {
        const { results } = await fetch( `https://api.opencagedata.com/geocode/v1/json?q=${busInfo.city}&key=${process.env.Map_Key}` ).then( (result)=>result.json() )
        const { lat, lng } = results[0].geometry
        // const addrList = await Geocode.fromAddress(busInfo.city)
        // console.log(`[getSuggestionList] for ${busInfo.city}: result:${addrList}`)
        // const { lat, lng } = addrList.results[0].geometry.location
        // console.log(`Latitude:${lat} Longitude: ${lng}`)
        //https://api.yelp.com/v3/autocomplete?text=pai-northern-thai-kitchen&latitude=43.64784&longitude=-79.38872&latitude=${lat}&longitude=${lng}
        const url = `https://api.yelp.com/v3/autocomplete?text=${busInfo.name.replace(/ /g, '-')}&latitude=${lat}&longitude=${lng}`
        const result = await axios.get(url, { headers: { Authorization: AuthStr } } )
        console.log(result.data)
        //{
        //     "categories": [
        //         {
        //             "alias": "restaurants",
        //             "title": "Restaurants"
        //         },
        //         {
        //             "alias": "thai",
        //             "title": "Thai"
        //         }
        //     ],
        //     "businesses": [
        //         {
        //             "id": "r_BrIgzYcwo1NAuG9dLbpg",
        //             "name": "Pai Northern Thai Kitchen"
        //         }
        //     ],
        //     "terms": [
        //         {
        //             "text": "Thai Delivery"
        //         }
        //     ]
        // }
        return result.data.businesses
    }


}

module.exports = Yelp

//  const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);