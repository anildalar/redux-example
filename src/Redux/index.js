//1. Action
const ROTATE_STOP='ROTATE_STOP';
const ROTATE_START = 'ROTATE_START';


//Action Creator
//named export
export function startAnimation(){
    return {
        type:ROTATE_START,
        payload:{
            status:'start'
        }
    }
}

//named export
export function stopAnimation(){
    return {
        type:ROTATE_STOP,
        payload:{
            status:'stop'
        }
    }
}

let initialState = {
    status:'start'
};
//2. Reducer is a function 
//Accept Old Value and return new value
let reducer = (state = initialState,action)=>{
    switch(action.type){
        case  ROTATE_STOP : 
            return {
                ...state,
                status:'stop'
            };
            break;
        case ROTATE_START:
            return {
                ...state,
                status:'start'
            };
            break;
        default:
            return state;
    }
}


//3. Store
const redux = require('redux');
//Create Store Object

let store = redux.createStore(reducer);

export default store;
