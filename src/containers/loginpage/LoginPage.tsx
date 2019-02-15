import * as React from 'react';
import './LoginPage.css';
import SimpleButton from '../../components/buttons/SimpleButton';

export interface LoginPageProps {
    onComponentDidMount: (url: string) => void;
    onSubmit: () => void;
    btnElement: string;
    btnType: string;

}

class LoginPage extends React.Component<LoginPageProps> {
    render() {
        return (
            <div className="login-page">
              <div className="form">
                <form className="register-form">
                  <input type="text" placeholder="name"/>
                  <input type="password" placeholder="password"/>
                  <input type="text" placeholder="email address"/>
                  <button>create</button>
                  <p className="message">Already registered? <a href="#">Sign In</a></p>
                </form>
                <form className="login-form">
                  <input type="text" placeholder="username"/>
                  <input type="password" placeholder="password"/>
                  <SimpleButton btnElement={this.props.btnElement} btnType={this.props.btnType} clickEvt={this.props.onSubmit} />
                </form>
              </div>
            </div>
        );
    }
    componentDidMount() {
        const url: string = window.location.href;
        this.props.onComponentDidMount(url);
    }
}

export default LoginPage;
