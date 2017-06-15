import React, {Component} from 'react';
import  { Link } from 'react-router'

class Header extends Component {

    render() {

        return (
            <div className="header-body">
                <span><Link to="/">Telephone</Link> </span>
                <Link className="pull-right" to="/contacts/new">CREATE</Link>
                <Link className="pull-right" to="/contacts/settings">SETTINGS</Link>
            </div>
        )
    }
}

export default Header;