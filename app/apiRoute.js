//config env credentials
require('dotenv').config()
//create yelp API client
const client = require('yelp-fusion').client(process.env.yelp_API_key);

//!TODO implement changes from input
const searchRequest = {
    location:"Toronto",
    limit: 10
}

async function yelpResult(){
    console.log(`calling [yelpResult]`)
    const resultList = await client.search(searchRequest)
    .then( res => res.jsonBody.businesses )
    .catch(e => {
        console.log(e);
      })
    return resultList
}

 module.exports = yelpResult

//  const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);