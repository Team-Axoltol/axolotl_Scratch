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

const postSchema = new Schema ({
    user_id: {type: Schema.Types.ObjectId, ref: 'user'},
    title: {type: String, required: true},
    body: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'comment'}],
    topic: {type: String, default: 'general'}, 
    industry: {type: String},
    city: {type: String},
    date: {type: Date, default: Date.now, required: true},
})

const Post = mongoose.model('post', postSchema);



const commentSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'user'},
    industry: {type: String, required: true},
    post: {type: Schema.Types.ObjectId, ref: 'Post', required: true},
    body: {type: String, required: true},
    date: {type: Date, default: Date.now, required: true}
})

const Comment = mongoose.model('comment', commentSchema)

const userSchema = new Schema ({
    username: {type: String, required: true},
    bio: {type: String, default: 'worker'},
    posts: [{type: Schema.Types.ObjectId, ref: 'post'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'comment'}],
    liked_posts: [{type: Schema.Types.ObjectId, ref: 'post'}],
    followed_topics: [],
})
const User = mongoose.model('user', userSchema)



module.exports = {
    Post,
    Comment,
    User
}