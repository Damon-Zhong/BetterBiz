const mongoose = require('mongoose')
const db = require('../model')

mongoose.connect('mongodb://localhost/betterbiz', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

let BusinessSeeds = [
    {
        busType:'Restaurant',
        name: 'Pai Northern Thai Kitchen',
        url: 'pai-northern-thai-kitchen',
        image: 'https://s3-media3.fl.yelpcdn.com/bphoto/t-g4d_vCAgZH_6pCqjaYWQ/o.jpg',
        address:{
            city: 'Toronto',
            country: 'Canada',
            address1: '18 Duncan Street',
            zipCode: 'M5H 3G8'
        },
        highlight:['LGBT', 'Black', 'Eco'],
        yelpId: 'pai-northern-thai-kitchen-toronto-5',
        ownDelivery: true
    },
    {
        busType:'Restaurant',
        name: 'Seven Lives Tacos y Mariscos',
        url: 'seven-lives-tacos-y-mariscos',
        image: 'https://s3-media3.fl.yelpcdn.com/bphoto/wCJs2nXuwtcMN0I_OTAVkQ/o.jpg',
        address:{
            city: 'Toronto',
            country: 'Canada',
            address1: '69 Kensington Avenue',
            zipCode: 'M5T 2K2'
        },
        highlight:[ 'Eco','Community' ],
        yelpId: 'seven-lives-tacos-y-mariscos-toronto',
        ownDelivery: false
    }
]


db.Business.deleteMany({})
    .then(() => db.Business.collection.insertMany(BusinessSeeds))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });