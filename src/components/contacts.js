import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {load_contacts } from '../actions/index'

import Contact from './contact';

class Contacts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }
    }

    componentWillMount() {
        this.props.load_contacts();
    }

    onUpdateList(event){
        this.setState({
            search: event.target.value
        })
    }


    render() {

        if (!this.props.contacts.length) return null;

        let list = this.props.contacts.filter((contact)=>{
            return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        });

        list = list.map((li) => {
            return <Contact key={li._id} data={li} />
        })

        return (
            <div>
                <input value={this.state.search} onChange={this.onUpdateList.bind(this)} type="text" className="form-control" placeholder="Type text to search contact"/>
                <ul className="list-group">
                    { list }
                </ul>
            </div>)
    }
}


function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}
export default connect(mapStateToProps, {load_contacts})(Contacts) ;