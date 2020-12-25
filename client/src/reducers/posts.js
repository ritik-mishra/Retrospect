//a function that accepts state and action. ased on the action type, we want to do something
export default (posts = [], action) => { //state is renamed as posts
    switch (action.type) { 
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload]; //... is used to spread all the posts and add a new post. This new post is stored in action.payload
        default:
            return posts;
    }
}