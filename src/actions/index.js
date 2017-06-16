//noinspection JSUnresolvedVariable
import { LOAD_CONTACTS, UPDATE_CONTACT, CREATE_CONTACT, FETCH_CONTACT  } from './types'
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
    let result = axios.put(`/contacts/${id}`, props)
        .then(()=> browserHistory.push('/contacts'));

    return {
        type: UPDATE_CONTACT
    }
}

export function fetch_contact(id) {
    let result = axios.get(`/contacts/${id}`);

    return {
        type: FETCH_CONTACT,
        payload: result
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