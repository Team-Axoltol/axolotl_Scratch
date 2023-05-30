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

const userSchema = new Schema ({
    name: {type: String, required: true},
    bio: {type: String, default: 'worker'},
    posts: [{type: Schema.Types.ObjectId, ref: 'post'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'comment'}],
    liked_posts: [{type: Schema.Types.ObjectId, ref: 'post'}],
    location: Number,
    industry: {type: String, default: 'Unemployed'},
    email: {type: String, required: true},
    jobLog: [{type: Schema.Types.ObjectId, ref: 'appliedjob'}]
})
const User = mongoose.model('user', userSchema)



module.exports = User;
