import React, { useState } from 'react';
import './Login.scss'
import Button from '@material-ui/core/Button';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../redux/auth-reducer';

const URL = "https://server-expres.herokuapp.com/auth/login";

const Login = (props) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const submitHendler = async (event) => {
        event.preventDefault();

        let body = { ...form };
        body = JSON.stringify(body);
        let headers = {};
        headers["Content-Type"] = "application/json";
        const response = await fetch(URL, { method: "POST", body, headers });
        const data = await response.json();
        if (data) {
            localStorage.setItem("token", data.token);
            props.setUser(true);
            console.log(data);
        }
    };

    return (
        <>
            {props.isLoggedIn === false ? <div className="login">
                <h1>Login Page</h1>
                <form onSubmit={(e) => submitHendler(e)}>
                    <div>
                        <input onChange={changeHandler} type="email" placeholder="email*" name="email" />
                    </div>
                    <div>
                        <input onChange={changeHandler} type="password" placeholder="password*" name="password" />
                    </div>
                    <Button variant="contained" type="submit">
                        SignIn
                </Button>
                </form>
                <NavLink to="/registration">SignUp</NavLink>
            </div>
                :
                <Redirect to="/profile" />
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps, { setUser })(Login)