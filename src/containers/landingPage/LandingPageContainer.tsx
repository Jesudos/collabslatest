import { connect } from 'react-redux';
import LandingPage from './LandingPage';
import { Dispatch } from 'redux';
import { AppState } from '../../redux';
import { push } from 'react-router-redux';
import { getUpcomingEvents } from '../../actions/basicActions';

export const mapStateToProps = (state: AppState) => {
    return {
        btnElement: 'Landing Page',
        btnType: 'signin',
        upcomingEvents: state.events.eventDetails,
        blogEvents: [
            { title: 'Generic cloud usage', desc: 'Suggested contents text will come here', date: 'Published : JULY 24, 2018', imagePath: '../img/3.jpg' },
            { title: 'Layered microservices architecture', desc: 'Suggested contents text will come here', date: 'Published : JULY 28, 2018', imagePath: '../img/2.jpg' },
            { title: 'infrastructure configuration scanner', desc: 'Suggested contents text will come here', date: 'Published : JULY 30, 2018', imagePath: '../img/1.jpg' },
            { title: 'Service mesh', desc: 'Suggested contents text will come here', date: 'Published : JULY 24, 2018', imagePath: '../img/1.jpg' },
            { title: 'Event Storming', desc: 'Suggested contents text will come here', date: 'Published : JULY 28, 2018', imagePath: '../img/2.jpg' },
            { title: 'Cloud Concepts And Models', desc: 'Suggested contents text will come here', date: 'Published : JULY 30, 2018', imagePath: '../img/3.jpg' }
        ]
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<AppState>) => {

    const changeIndicator = () => {
        const aboutSelect = document.getElementById('about_select') as HTMLElement;
        const aboutMenu = document.getElementById('menu_about') as HTMLElement;
        aboutSelect.style.visibility = 'hidden';
        aboutMenu.style.color = '#374050';

        const eventSelect = document.getElementById('event_select') as HTMLElement;
        const eventMenu = document.getElementById('menu_event') as HTMLElement;
        eventSelect.style.visibility = 'visible';
        eventMenu.style.color = '#1890FF';
    };

    return {
        onSubmit: () => {
            changeIndicator();
            dispatch(push('/event'));
        },
        bookEvent: () => {
            changeIndicator();
            dispatch(push('/event'));
        },
        onComponentDidMount: () => {
            dispatch(getUpcomingEvents);
        }
    };
};

const LandingPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LandingPage);

export default LandingPageContainer;
