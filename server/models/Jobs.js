const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://jmezhang:5kJeQr21nAJuRx9g@axolotl.awqobzh.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'axolotl',
})
.then(() => console.log('connected to Mongo DB'))
.catch((err) => console.log(err));

const Schema = mongoose.Schema;

const jobsSchema = new Schema ({
    industry: {type: String, required: true},
    company: {type: String, required: true},
    salary: [{type: Number, required: true}],
    jobTitle: [{type: String, required: true}],
    status: [{type: String, required: true}],
})
const Jobs = mongoose.model('jobs', jobsSchema)



module.exports = Jobs;