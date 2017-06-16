import React, { Component } from 'react';
import { connect } from 'react-redux';
import { update_contact } from '../actions/index';
import { browserHistory } from 'react-router'

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            favorite: this.props.data.favorite
        }
    }

    onClickFav(id, props){

        this.setState({
            favorite: !this.state.favorite
        });

        this.props.update_contact(id,{favorite:!this.state.favorite})

    }

    onClickContact(id){
        browserHistory.push(`/contacts/${id}`)
    }
    render(){
        const {_id, avatar, name, surname, favorite} = this.props.data;
        return (
            <li className="list-group-item" id={_id}  >
                <span className={`favicon-${this.state.favorite}`} onClick={(e)=> this.onClickFav(_id)}></span>
                <img src={avatar} className="img-rounded" width={20} height={20} style={{marginRight: '5px'}}/>
                <span className="name" onClick={(e)=> this.onClickContact(_id)}>{name}</span>
            </li>
        )
    }
}


export  default connect(null, { update_contact })(Contact);