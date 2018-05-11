import {
    GET_REGIONS,
    GET_TEACHERS,
    GET_COURSES
} from '../actions/main'
import {handleActions} from 'redux-actions'


export const GetExam = (state = {list: []}, action) => {
    switch (action.type) {
        case `${GET_REGIONS}_LOADING`:
            return state;
        case `${GET_REGIONS}_SUCCESS`:
            const Examlist = action.payload.result;
            return Object.assign({}, state, Examlist);
        case `${GET_REGIONS}_ERROR`:
            return state;
        default:
            return state;
    }
}

