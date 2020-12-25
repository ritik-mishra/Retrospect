import React from 'react';
import Post from './Post/Post';
import { useSelector} from 'react-redux'; //we need to fetch the data from the global redux store

import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts); // used as a hook
    const classes = useStyles(); // to be used in different components by the 'classes' variable.the_required_property

    console.log(posts);
    
    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;