import { COMMENTS } from '../shared/comments';
//export a reducer function that manages only the dishes
export const Comments = (state= COMMENTS, action )=>{
    switch(action.type){
        default:
            return state;
    }
}