const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://jmezhang:5kJeQr21nAJuRx9g@axolotl.awqobzh.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "axolotl",
  })
  .then(() => console.log("connected to Mongo DB"))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const postSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "user" },
  title: { type: String },
  body: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
  topic: { type: String, default: "general" },
  industry: { type: String },
  company: { type: String, required: true },
  city: { type: String },
  date: { type: String, required: true },
  likeCount: {type: Number, default: 0},
});


// const postSchema = new Schema({
//   body: { type: String },
//   industry: { type: String },
//   company: { type: String },
//   date: { type: String },
// });


const Post = mongoose.model("post", postSchema);

module.exports = Post;
