//a function that accepts state and action. Based on the action type, we want to do something
import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes'

export default (posts = [], action) => { //state is renamed as posts
    switch (action.type) { 
        case DELETE:
            return posts.filter((post) => post.id !== action.payload) //we will keep all the posts except the once with id equal to action.payload
        case UPDATE :
        //case LIKE : because the update will work for this as well
            return posts.map((post) => post._id===action.payload? action.payload: post); // action.payload is the updated post.  for map method, we'll be changing the post array and return the changed array
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload]; //... is used to spread all the posts and add a new post. This new post is stored in action.payload
        default:
            return posts;
    }
}