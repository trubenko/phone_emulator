import React, { Component } from 'react';
import ContactNew from '../components/contact_new';
import checkStatus from '../components/check_contact';

let CheckedContact = checkStatus(ContactNew);

const ContactCard = (props)=>{

    return (
        <div>
            <CheckedContact />
        </div>
    )
}

export default ContactCard;