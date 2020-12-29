import React from 'react';
import {Grid, CircularProgress} from '@material-ui/core' // CircularProgress - loading spinner
import Post from './Post/Post';
import { useSelector} from 'react-redux'; //we need to fetch the data from the global redux store

import useStyles from './styles';

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts); // used as a hook
    const classes = useStyles(); // to be used in different components by the 'classes' variable.the_required_property

    console.log(posts);
    
    return (
        !posts.length? <CircularProgress />: (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => ( //curly braces represent JS logic. Looping over the posts
                    <Grid key={post._id} item xs={12} sm={6}> 
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                    ))}

            </Grid>
        )
    );
}

export default Posts;
//xs - how much width will it take on mobile devices. {12} represents full width