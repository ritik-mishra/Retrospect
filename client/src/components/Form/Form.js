import React, {useState, useEffect} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = (currentId, setCurrentId) => {
    const [postData, setPostData] = useState({creator: '', title:'', message:'', tags:'', selectedFile:''}) //usestate do cheez deta hai, ek variable ek function deta hai
    const post = useSelector((state) => currentId? state.posts.find((p) =>p._id === currentId) : null); //ternary operator - we check for a post p that has the same id as our currentId, if we don't have the current id then we return null
    const classes = useStyles(); // to be used in different components by the 'classes' variable.the_required_property
    const dispatch = useDispatch();

useEffect(() => {
    if(post) setPostData(post) //if post exist
}, [post]) // second param is called dependency array, when should this function work ie when what changes; hence the dependency array

    //once the user hit submit, we want to send a post request with all the data that user typed in
    const handleSubmit = (e) => {
        e.preventDefault();
  
        if(currentId) { //if there exist a currentID, then the post needs to be updated not created
            dispatch(updatePost(currentId, postData));
        }
        else {
        dispatch(createPost(postData));
        }

        clear(); // once we click the submit button, the contents should be cleared
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({creator: '', title:'', message:'', tags:'', selectedFile:''})  // changing contents back to clear
    }

    return (
        //paper is like a div with whitish background
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? "Editing" : "Creating"} a Memory</Typography> 
            <TextField name = "creator" variant = "outlined" label="creator" fullWidth value={postData.creator}onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />
            <TextField name = "title" variant = "outlined" label="Title" fullWidth value={postData.title}onChange={(e) => setPostData({ ...postData, title: e.target.value})} />
            <TextField name = "message" variant = "outlined" label="Message" fullWidth value={postData.message}onChange={(e) => setPostData({ ...postData, message: e.target.value})} />
            <TextField name = "tags" variant = "outlined" label="Tags" fullWidth value={postData.tags}onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})} /> 
            <div className = {classes.fileInput}> <FileBase type = "file" multiple = {false} onDone = {({base64}) => setPostData({ ...postData, selectedFile: base64 })}/> </div>
            <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="container" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
    </Paper>
    );
}
// the whole data from our post is gonna be stored in the postData object in the state 
//onChange - callback function having event(e) as an parameter 
// Line 42 - ternary for checking if the current Id exist (in case of post updation), or not
export default Form;