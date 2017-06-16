import React , {Component} from 'react';
import { Link } from 'react-router';

class Menu extends Component{


    render(){

        return(
                <div className="text-center text-uppercase menu-body">
                    <Link className="col-xs-4" to="/journal">journale</Link>
                    <Link className="col-xs-4" to="/favs">favorites</Link>
                    <Link className="col-xs-4" activeClassName="active" to="/contacts">contacts</Link>
                </div>
        )
    }
}

export default Menu;