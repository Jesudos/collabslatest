import { connect } from 'react-redux';
import Error from './Error';
import { Dispatch } from 'redux';
import { AppState } from '../redux';

export const mapStateToProps = (state: AppState) => {
    return {
        errorTitle: 'state.errorState.errorTitle',
        errorMessage: 'state.errorState.errorDetails!!.errorDescription',
        errorStates: 'state.errorState.errorDetails!!.error'
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
    return {
        onSubmit: () => {
            alert('Error');
        },
    };
};

const ErrorContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Error);

export default ErrorContainer;
