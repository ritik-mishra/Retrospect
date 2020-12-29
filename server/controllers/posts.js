/*  We will take all the logic out of the routes file (callback functions) and paste
    them in posts of controllers. This will help in better scalability and readability of ConvolverNode
*/

//Gives us access to the real model

import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req,res) => { //callback function
    try { // will run if everything is normal as if without try-catch block
        
        //finding something inside a model takes time, await to make it async 
        const postMessages = await PostMessage.find(); // trying to retrieve all the posts that we currently have in the dB; 

        console.log(postMessages);

        res.status(200).json(postMessages); //200 means everything went ok
    } catch (error) { //will run if their is any error in the call
        res.status(404).json({message: error.message});
    }
    
    // res.send("This is a response to the API call on localhost:5000");
}

//logic for adding diff posts
export const createPost = async (req,res) => {
    //we can't console log this RN because we don't have any method to send post requests yet
    const post = req.body;

    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        
        res.status(201).json(newPost); //201 - successful creation
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async(req, res) => {
    const {id: _id} = req.params // extracting the id from req.params to be used in the callback function of routes
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id'); // if the id is invalid

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new:true}); // async action, ths adding await

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id'); // if the id is invalid

    await PostMessage.findByIdAndRemove(id);

    console.log('DELETE');
    
    res.json({message: 'Post deleted successfully'});
}

export const likePost = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id'); // if the id is invalid

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new:true});

    res.json(updatePost);
}