import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

//class which helps us to create router handlers
const router = express.Router(); 

//when someone visits localhost:5000
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost); //patch is used for updating existing documents
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router; 