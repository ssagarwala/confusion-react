import { LEADERS} from '../shared/leaders';
//export a reducer function that manages only the dishes
export const Leaders = (state= LEADERS, action )=>{
    switch(action.type){
        default:
            return state;
    }
}