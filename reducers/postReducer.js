const postReducer=(state={},action) =>{
     console.log("reducer" , action)
    switch(action.type){
        case "getPosts" :
        return{
            ...state,
            posts:action.payload
        };
        default:
        return state

    }
 
}
export default postReducer;
