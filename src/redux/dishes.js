import { DISHES } from '../shared/dishes';

//export a reducer function that manages only the dishes
export const Dishes = (state= DISHES, action )=>{
            switch(action.type){
                default:
                    return state;
            }
}