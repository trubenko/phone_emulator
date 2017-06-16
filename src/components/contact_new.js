import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {create_contact, update_contact} from '../actions/index'


class ContactNew extends Component {
    constructor(props) {
        super(props);

    }

    submit(values) {
        const { _id } = this.props.initialValues;

        if ( _id ==  null) {
            this.props.create_contact(values)
        } else {
            this.props.update_contact(_id, values)
        }
    }

    render() {
        console.log(this.props);
        const {handleSubmit} = this.props;


        return (
            <div className="contact-block container-fluid">
                <form onSubmit={ handleSubmit(this.submit.bind(this)) }>
                    <label htmlFor="name">First Name</label>
                    <Field name="name" component="input" className="form-control" type="text"/>


                    <label htmlFor="surname">Last Name</label>
                    <Field name="surname" component="input" className="form-control" type="text"/>

                    <label htmlFor="phone">Phone</label>
                    <Field name="phone" component="input" className="form-control" type="text"/>

                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" className="form-control" type="email"/>

                    <label htmlFor="age">Age</label>
                    <Field name="age" component="input" className="form-control" type="number"/>

                    <div className="text-center">
                        <button className="btn btn-danger" type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        initialValues: state.contact
    }
}

ContactNew = reduxForm({
    form: 'contact',
    enableReinitialize: true
})(ContactNew);

export default connect(mapStateToProps, {create_contact, update_contact})(ContactNew);