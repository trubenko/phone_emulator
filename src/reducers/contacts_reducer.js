import { LOAD_CONTACTS } from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case LOAD_CONTACTS:
            return action.payload.data;
        default:
           return state
    }
}