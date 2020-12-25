import React from 'react';
import useStyles from './styles';

const Post = () => {
    const classes = useStyles(); // to be used in different components by the 'classes' variable.the_required_property
    return (
        <h1>POST</h1>
    );
}

export default Post;