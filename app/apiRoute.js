//config env credentials
require('dotenv').config()
const axios = require('axios')
const { db } = require('../model/User')
//create yelp API client
const client = require('yelp-fusion').client(process.env.yelp_API_key)
const AuthStr = `Bearer ${process.env.yelp_API_key}`

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

        const businessResult = await client.business("IOFzd7mBYCopQQUlRivPCw")
            .then( res => res.jsonBody )
            .catch(e => {
                console.log(e);
            })
        return businessResult;
    },
    getSuggestionList: async (busInfo) => {
        //input: { name: business name, city: city name}
        //output: [ {id, name}, {id, name},....]
        const returnBusiness = await db.User.findOne({yelpId: busInfo.yelpId});
        if(returnBusiness){
            return {message:'This business already exists. Each business can only be added once to BetterBiz.'}
        } else {
            const GeometryResult = await axios.get( `https://api.opencagedata.com/geocode/v1/json?q=${busInfo.city}&key=${process.env.Map_Key}` )
            if( GeometryResult.data.results.length === 0 ){
                return {message:'City not found. Please try again'}
            }
            const { lat, lng } = GeometryResult.data.results[0].geometry
            const url = `https://api.yelp.com/v3/autocomplete?text=${busInfo.name.replace(/ /g, '-')}&latitude=${lat}&longitude=${lng}`
            const result = await axios.get(url, { headers: { Authorization: AuthStr } } )
            if( result.data.businesses.length === 0 ){
                return {message:'Business not found. Please try again'}
            }
            return result.data.businesses
        }
    }
}

module.exports = Yelp
