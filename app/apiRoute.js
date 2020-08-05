//config env credentials
require('dotenv').config();
const axios = require('axios');
//create yelp API client
const client = require('yelp-fusion').client(process.env.yelp_API_key);
const AuthStr = `Bearer ${process.env.yelp_API_key}`;

//!TODO implement changes from input
const Yelp = {
    // autoComplete: async (term) => {

    // },
    generalSearch: async (location = 'Toronto', query) => {
        console.log('General Search...');
        const url = `https://api.yelp.com/v3/businesses/search?location=${location}&term=${query}`;
        const resultList = await axios.get(url, {
            headers: { Authorization: AuthStr },
        });
        // const searchRequest = {
        //     location:'Toronto',
        //     limit:10
        // }
        // const resultList = await client.search(searchRequest)
        //     .then( res => res.jsonBody.businesses )
        //     .catch( e => console.log(e) )
        return resultList;
    },

    getBusById: async (id) => {
        console.log(`[getBusById] get business information by ID: ${id}`);
        const url = `https://api.yelp.com/v3/businesses/${id}`;
        const resultList = await axios.get(url, {
            headers: { Authorization: AuthStr },
        });
        // const searchRequest = {
        //     location,
        //     name
        // }
        // const resultList = await client.search(searchRequest)
        //     .then( res => res.jsonBody.businesses )
        //     .catch( e => console.log(e) )
        return resultList;
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

        const businessResult = await client
            .business(yelpId)
            .then((res) => res.jsonBody)
            .catch((e) => {
                console.log(e);
            });
        return businessResult;
    },

    getEvent: async (input) => {
        const url = `https://api.yelp.com/v3/events?location=${input.city}&start_date=${input.startDate}&end_date=${input.endDate}`;
        const result = await axios.get(url, {
            headers: { Authorization: AuthStr },
        });
        console.log(result.data.events);
        return result.data.events;
    },
};

module.exports = Yelp;

//  const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);
