//1. Action
const ROTATE_STOP='ROTATE_STOP';
const ROTATE_START = 'ROTATE_START';


//Action Creator
function startAnimation(){
    return {
        type:ROTATE_START,
        payload:{
            status:true
        }
    }
}

function stopAnimation(){
    return {
        type:ROTATE_STOP,
        payload:{
            status:false
        }
    }
}

let initialState = {
    state:true
};
//2. Reducer is a function 
//Accept Old Value and return new value
let reducer = (state = initialState,action)=>{
    switch(action.type){
        case  ROTATE_STOP : 
            return {
                ...state,
                state:false
            };
            break;
        case ROTATE_START:
            return {
                ...state,
                state:true
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
