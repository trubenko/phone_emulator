import React from 'react';
import { connect } from 'react-redux';
import Pagination from './pagination';

const Bottom = (props)=>{

    return (
        <div className="text-center">
            <Pagination />

            Total number of contact { props.contacts.length }
        </div>
    )
}

function mapStateToProps({contacts}) {
    return { contacts }
}
export default connect(mapStateToProps)(Bottom);