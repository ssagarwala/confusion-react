import * as ActionTypes from './ActionTypes';

//An Arrow function that takes 4 parameters
// will return a plain JS object
export const addComment = (dishId, rating, author, comment) =>({
        
        type:ActionTypes.ADD_COMMENT,
        payload:{
            dishId:dishId,
            rating:rating,
            author:author,
            comment:comment

        }
});