import { createStore } from 'redux';
import { Reducer, initialSate } from './reducer';

export const ConfigureStore = () =>{

        const store = createStore(
             Reducer, 
             initialState
        );

    return store;
}