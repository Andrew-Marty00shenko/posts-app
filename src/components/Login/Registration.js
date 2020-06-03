import React, { Component } from 'react'
import './Registration.scss'
import Button from '@material-ui/core/Button';
import { NavLink, Redirect } from 'react-router-dom';
import Axios from 'axios';

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.SignUp = this.SignUp.bind(this);
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value })
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value })
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }

    SignUp(e) {
        e.preventDefault();
        Axios.post('https://server-expres.herokuapp.com/auth/registration', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="registration">
                <h1>Registration Page</h1>
                <form onSubmit={this.SignUp} >
                    <div>
                        <input value={this.state.name} onChange={this.handleNameChange} type="name" placeholder="name*" name="name" />
                    </div>
                    <div>
                        <input value={this.state.email} onChange={this.handleEmailChange} type="email" placeholder="email*" name="email" />
                    </div>
                    <div>
                        <input value={this.state.password} onChange={this.handlePasswordChange} type="password" placeholder="password*" name="password" />
                    </div>
                    <Button variant="contained" type="submit">
                        SignUp
                </Button>
                </form>
                <NavLink to="/">SignIp</NavLink>
            </div>
        )
    }
}

export default Registration