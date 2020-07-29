//config env credentials
require('dotenv').config()
//create yelp API client
const client = require('yelp-fusion').client(process.env.yelp_API_key);

//!TODO implement changes from input
const Yelp = {
    // setSearchRequest: async (queryObj) =>{

    // },
    generalSearch: async () => {
        console.log('General Search...')
        const searchRequest = {
            location:'Toronto',
            limit:10
        }
        const resultList = await client.search(searchRequest)
            .then( res => res.jsonBody.businesses )
            .catch( e => console.log(e) )
        return resultList
    },

    fetchByName: async (name, location='Toronto') => {
        console.log(`Fetching by name: ${name}`)
        const searchRequest = {
            location,
            name
        }
        const resultList = await client.search(searchRequest)
            .then( res => res.jsonBody.businesses )
            .catch( e => console.log(e) )
        return resultList
    },

    fetchById: async (id, location='Toronto') => {
        console.log(`Fetching by Id: ${id}`)
        const searchRequest = {
            location,
            id
        }
        const resultList = await client.search(searchRequest)
            .then( res => res.jsonBody.businesses )
            .catch( e => console.log(e) )
        return resultList
    }
}

module.exports = Yelp
//  const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);