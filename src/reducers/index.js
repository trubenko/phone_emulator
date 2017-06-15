import { combineReducers } from 'redux'
import contacts_reducer  from './contacts_reducer'
import { reducer as formReducer } from 'redux-form'

let rootReducer = combineReducers({
    contacts: contacts_reducer,
    form:formReducer
});

export default rootReducer;