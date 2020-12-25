import * as api from '../api' // import everything from actions as api

//Action creators: functions that return actions. action is just an object that has a type and payload 
export const getPosts = () => async(dispatch) => { //thunk allows us to have another arrow function here
    try {
        //we are first getting the response from api, and in the response we always have the data object which we are returing from the backend. The data represents the post  
        const {data} = await api.fetchPosts(); // fetching the data from api and sending the data through action.payload
        //directly dispatching here
        dispatch( {type:'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message);
    }
    
    //const action = {type: 'FETCH_ALL', payload:[]} //payload is usually the data where we store all our posts
    //dispatch(action); //with redux-thunk, instead of return we dispatch an action
}

export const createPost = () => async (dispatch) => { // coming from redux thunk as before
    try {
        const {data} = await api.createPost(); //creating a post api request to our backend server

        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}