import { AnyAction, Dispatch } from 'redux';
import { AppState } from '../redux'; 
import axios from 'axios';
import { UPCOMING_EVENTS, TODAY_EVENTS } from '../reducers/events';

export const getUpcomingEvents = async (dispatch: Dispatch<AppState>, getState: () => AppState) => {
    const response = await axios.get(
        `${getState().environment.API_URL}upcomingevent`
    );

    const eventDetails = response.data;

    dispatch({ type: UPCOMING_EVENTS , eventDetails } as AnyAction);                        
    return true;
};
 
export const convertToFormattedDate = (strDate: string) => {
    // Jan, 12
    const month: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const givenDate = new Date(strDate);
    const dateString = `${month[givenDate.getMonth()]} ${givenDate.getDate()}, ${givenDate.getFullYear()}`;
    return dateString;
};

export const getTodayEvents = async (dispatch: Dispatch<AppState>, getState: () => AppState) => {
    const response = await axios.get(`${getState().environment.API_URL}todayevent`);

    const todayEvents = response.data;

    dispatch({ type: TODAY_EVENTS , todayEvents } as AnyAction);                        
    return true;
};
