import { LOAD_CONTACTS, UPDATE_CONTACT, CREATE_CONTACT  } from './types'
import axios from 'axios';
import {browserHistory} from 'react-router'

export function load_contacts() {
    let result = axios.get('/contacts');
    return {
        type: LOAD_CONTACTS,
        payload: result
    }
}


export function update_contact(id, props) {
    let result = axios.put(`/contacts/${id}`, props);

    return {
        type: UPDATE_CONTACT
    }
}


export function create_contact(props) {
    let result = axios.post('/contacts',props)
        .then(()=>browserHistory.push('/contacts'));

    return {
        type: UPDATE_CONTACT,
        payload: result
    }
}