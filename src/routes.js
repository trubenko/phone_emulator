import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import App from './components/app'
import Journal from './components/journal'
import Favorites from './components/favorites'
import Contacts from './components/contacts'
import ContactNew from './components/contact_new'


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Contacts}/>
        <Route path="/journal" component={Journal}/>
        <Route path="/favs" component={Favorites}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/contacts/new" component={ContactNew}/>
        <Route path="/contacts/:id" component={Contacts}/>
    </Route>
)