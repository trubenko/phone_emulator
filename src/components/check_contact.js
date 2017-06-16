import React, {Component} from 'react';
import {connect} from 'react-redux';
import ContactNew from './contact_new';
import {fetch_contact} from '../actions/index';

export  default function (ComposedComponent) {
    class CheckStatus extends Component {

        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            this.props.fetch_contact(this.context.router.params.id)
        }

        render() {
            return <ComposedComponent { ...this.props } data={this.props.contact}/>
        }
    }

    function mapStateToProps({contact}) {
        return {contact}
    }

    return connect(mapStateToProps, {fetch_contact})(CheckStatus);

}

