import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../redux';
import PcfFormPage from './PcfFormPage';

export const mapStateToProps = (state: AppState) => {
    return {
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
    return {
    };
};

const PcfFormPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PcfFormPage);

export default PcfFormPageContainer;
