import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password: ''});
        } catch (error) {   
            console.error(error);
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} required 
                         handleChange={this.handleChange} label='email'
                    />
                    <FormInput name="password" type="password" value={this.state.password} required 
                        handleChange={this.handleChange} label='password'
                    />
                    <div className='buttons'>
                        <CustomButton type="submit"> 
                            SIGN IN
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;