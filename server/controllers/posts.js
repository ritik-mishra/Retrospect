/*  We will take all the logic out of the routes file (callback functions) and paste
    them in posts of controllers. This will help in better scalability and readability of ConvolverNode
*/

//Gives us access to the real model

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