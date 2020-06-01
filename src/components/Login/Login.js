import React from 'react';
import './Login.scss'
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { required } from '../utils/validators';
import { Input } from '../../Common/FormControls/FormControls'
import { userLog } from '../../redux/auth-reducer';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.userLog(formData.email, formData.password);
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <NavLink to='/registration'>SignUp</NavLink>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} type="email*" placeholder="email" name="email" validate={[required]} />
            </div>
            <div>
                <Field component={Input} type="password" placeholder="password*" name="password" validate={[required]} />
            </div>
            <Button variant="contained" type="submit">
                SignIn
                </Button>
        </form>
    )
}

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm)

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { userLog })(Login)