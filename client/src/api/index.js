import axios from 'axios'; // used to make API calls

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost); // newPost is holding the complete new post
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`);
export const deletePost = (id) => axios.delete(`${url}/${id}`); // having just the id
export const likePost = (id) =>axios.patch(`${url}/${id}/likePost`);