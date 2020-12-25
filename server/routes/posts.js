import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'

//class which helps us to create router handlers
const router = express.Router(); 

//when someone visits localhost:5000
router.get('/', getPosts);
router.post('/', createPost);

export default router; 