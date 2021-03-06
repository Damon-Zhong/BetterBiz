//config env credentials
require('dotenv').config();
const axios = require('axios');
//create yelp API client
const client = require('yelp-fusion').client(process.env.yelp_API_key);
const AuthStr = `Bearer ${process.env.yelp_API_key}`;

const Yelp = {
    generalSearch: async (location = 'Toronto', query) => {
        console.log('General Search...');
        const url = `https://api.yelp.com/v3/businesses/search?location=${location}&term=${query}`;
        const resultList = await axios.get(url, {
            headers: { Authorization: AuthStr },
        });
        return resultList;
    },

    getBusById: async (id) => {
        console.log(`[getBusById] get business information by ID: ${id}`);
        const url = `https://api.yelp.com/v3/businesses/${id}`;
        const resultList = await axios.get(url, {
            headers: { Authorization: AuthStr },
        });
        return resultList;
    },
    yelpBusinessResult: async (yelpId) => {
        const businessResult = await client
            .business(yelpId)
            .then((res) => res.jsonBody)
            .catch((e) => {
                console.log(e);
            });
        return businessResult;
    },

    getEvent: async (input) => {
        try {
            const url = `https://api.yelp.com/v3/events?location=Toronto&start_date=${input.startDate}&end_date=${input.endDate}&categories=${input.category}&limit=30`;
            const result = await axios.get(url, {
                headers: { Authorization: AuthStr },
            });
            console.log(result.data.events);
            return result.data.events;
        } catch (error) {
            console.log(error);
            return [];
        }
    },

    getSuggestionList: async (busInfo) => {
        //input: { name: business name, city: city name}
        //output: [ {id, name}, {id, name},....]
        try {
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
        } catch(error) {
            console.log(error)
            return {message: error.toString()}
        }
    }
}

module.exports = Yelp
