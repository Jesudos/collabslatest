import { connect } from 'react-redux';
import EventPage from './EventPage';
import { Dispatch } from 'redux';
import { AppState } from '../../redux';
import { getUpcomingEvents, getTodayEvents } from '../../actions/basicActions';

export const mapStateToProps = (state: AppState) => {
    return {
        btnElement: 'event',
        btnType: 'signin',
        upcomingEvents: state.events.eventDetails,
        todayEvents: state.events.todayEvents,
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {
    return {
        onSubmit: () => {
            console.error('onSubmit called');  
            dispatch(getUpcomingEvents);
            dispatch(getTodayEvents);
        },
        onComponentDidMount: () => {
            // alert(url);
            dispatch(getUpcomingEvents);
            dispatch(getTodayEvents);
        }
    };
};

const EventPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EventPage);

export default EventPageContainer;
