import React, {Component} from 'react';
import Contact from './contact';
import {connect} from 'react-redux';
import {load_contacts} from '../actions/index'

class Favorites extends Component {
    componentWillMount() {
        this.props.load_contacts();
    }

    filterContacts(contacts) {
        return contacts.filter(function (contact) {
            return contact.favorite
        })
    }

    render() {
        let favs, freqUsed;

        if (this.props.contacts.length) {
            let filtered = this.filterContacts(this.props.contacts);

            if (filtered.length) {
                favs = (
                    <ul className="list-group">
                        { filtered.map((contact) => <Contact key={contact._id} data={contact}/>) }
                    </ul>
                )
            } else {
                favs = <div className="text-center">NO FAVS ADDED. CHOOSE ONE.</div>
            }

        }


        freqUsed = <div>Hello</div>

        return (

            <div>
                <div className="fav-category">Favorites</div>
                { favs    }
                <div className="fav-category">Favorites</div>
                { freqUsed }
            </div>
        )
    }
}

function mapStateToProps({contacts}) {
    return {contacts}
}
export default connect(mapStateToProps, {load_contacts})(Favorites);