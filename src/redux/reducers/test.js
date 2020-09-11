import {TEST_REDUX}  from '../actions/test'

const init = {
    a: 1
}

export function testReducer(state=init, action){
    const {type, data} = action
    switch(type){
        case TEST_REDUX:
            return Object.assign({}, state, data);
        default:
            return state;
    }
}