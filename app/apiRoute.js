//config env credentials
require('dotenv').config()
//create yelp API client
const client = require('yelp-fusion').client(process.env.yelp_API_key);

//!TODO implement changes from input
const searchRequest = {
    location:'Toronto',
    limit: 10
}

async function yelpResult(){
    console.log('calling [yelpResult]')
    const resultList = await client.search(searchRequest)
        .then( res => res.jsonBody.businesses )
        .catch(e => {
            console.log(e);
        })
    return resultList
}

async function yelpBusinessResult(yelpId){
    // await client.search({
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

module.exports = { yelpResult, yelpBusinessResult }
//  const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);