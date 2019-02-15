import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { Dispatch } from 'redux';
import { AppState } from '../../redux';

export const mapStateToProps = (state: AppState) => {
    return {
        btnElement: 'Sign-in',
        btnType: 'signin'
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
    return {
        onSubmit: () => {
            // alert('Login');
        },
        onComponentDidMount: (url: string) => {
            // alert(url);
        }
    }; 
};

const LoginPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginPage);

export default LoginPageContainer;
