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
        summary: 'Pai Northern Thai Kitchen is an authentic Thai restaurant in the heart of Toronto. It has been operating for over 10 years and is known for its authentic ambiance and high quality ingredients.',
        highlight:['LGBT', 'Black', 'Eco'],
        yelpId: 'pai-northern-thai-kitchen-toronto-5',
        website: 'www.painorthern.ca',
        ownDelivery: true
    },
    {
        busType:'Restaurant',
        name: 'Seven Lives Tacos y Mariscos',
        url: 'seven-lives-tacos-y-mariscos',
        summary: 'Seven Lives Tacos offers affordable Mexican cuisine in the heart of downtown Toronto. It is popular because of its beautiful outdoor patio and welcoming atmosphere.',
        highlight:[ 'Eco','Community' ],
        yelpId: 'seven-lives-tacos-y-mariscos-toronto',
        website: 'www.sevenlives.ca',
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