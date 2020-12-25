import mongoose from 'mongoose';

//mongoose helps us to provide uniformity to our docs. We are going to specify that each post is required to have these things
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creater: String,
    tags: [String],
    selectedFile: String, 
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});
// We will convert an image to string using base64

//Turning the schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema); 

//exporting a mongoose model from a postmodel file and then on that modle later on we'll be able to run commands such as find, create, update, delete
export default PostMessage;