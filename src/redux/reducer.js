import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS} from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

//initial state is just a javascript object
//initial configuration for the state
export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}
//Reducer function
//To generate a next state, it needs current state an action
// a pure function, state cannot be modified here 
// I can only do a immutable change and return an updated 
// version of the state. 
export const Reducer=(state = initialState, action)=>{
    return state;

}