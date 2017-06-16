import { combineReducers } from 'redux'
import contacts_reducer  from './contacts_reducer'
import contact_reducer  from './contact_reducer'
import { reducer as formReducer } from 'redux-form'

let rootReducer = combineReducers({
    contact: contact_reducer,
    contacts: contacts_reducer,
    form:formReducer
});

export default rootReducer;