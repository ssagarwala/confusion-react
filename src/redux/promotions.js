import { PROMOTIONS } from '../shared/promotions';
//export a reducer function that manages only the dishes
export const Promotions = (state= PROMOTIONS, action )=>{
    switch(action.type){
        default:
            return state;
    }
}