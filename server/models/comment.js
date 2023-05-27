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

const commentSchema = new Schema({
  user_id: {type: Schema.Types.ObjectId, ref: 'user'},
  industry: {type: String, required: true},
  post: {type: Schema.Types.ObjectId, ref: 'Post', required: true},
  body: {type: String, required: true},
  date: {type: Date, default: Date.now, required: true}
})

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment;