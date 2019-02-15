import { AnyAction, Reducer } from 'redux';

export const UPCOMING_EVENTS = 'events/upcoming_events';
export const TODAY_EVENTS = 'events/today_events';

export interface EventParticipant {
    id?: number;
    emailId?: string;
}

export interface EventDetail {
    name?: string;
    notes?: string;
    type?: string;
    startDate?: string;
    endDate?: string;
    startTime?: string;
    endTime?: string;
    eventParticipantList?: EventParticipant[];
}

export interface EventState {
    eventDetails?: EventDetail[];
    todayEvents?: EventDetail[];
}

const initialState: EventState = {
    eventDetails: [
    {
        name: 'Demos',
        notes: 'asdf',
        type: 'Technical',
        startDate: '2019-01-05T09:50:52.000+0000',
        endDate: '2019-01-05T09:50:52.000+0000',
        startTime: '2019-01-05T09:50:52.000+0000',
        endTime: '2019-01-05T09:50:52.000+0000',
        eventParticipantList: []
    },
    {
        name: 'Demon',
        notes: 'asdf',
        type: 'Technical',
        startDate: '2019-01-05T09:50:52.000+0000',
        endDate: '2019-01-05T09:50:52.000+0000',
        startTime: '2019-01-05T09:50:52.000+0000',
        endTime: '2019-01-05T09:50:52.000+0000',
        eventParticipantList: [
            {
                id: 1,
                emailId: 'null'
            }
        ]
    },
    {
        name: 'Demo1',
        notes: 'asdf',
        type: 'Technical',
        startDate: '2019-01-05T09:50:52.000+0000',
        endDate: '2019-01-05T09:50:52.000+0000',
        startTime: '2019-01-05T09:50:52.000+0000',
        endTime: '2019-01-05T09:50:52.000+0000',
        eventParticipantList: [
            {
                id: 2,
                emailId: 'ganesan@gmail.com'
            }
        ]
    },
    {
        name: 'asdf',
        notes: 'asdf',
        type: 'Technical',
        startDate: '2019-01-05T11:01:38.000+0000',
        endDate: '2019-01-05T11:01:38.000+0000',
        startTime: '2019-01-05T11:01:38.000+0000',
        endTime: '2019-01-05T11:01:38.000+0000',
        eventParticipantList: [
            {
                id: 3,
                emailId: 'test@gmail.com'
            }
        ]
    },
    {
        name: 'asdf',
        notes: 'asdf',
        type: 'Management',
        startDate: '2019-01-05T11:14:18.000+0000',
        endDate: '2019-01-05T11:14:18.000+0000',
        startTime: '2019-01-05T11:14:18.000+0000',
        endTime: '2019-01-05T11:14:18.000+0000',
        eventParticipantList: []
    },
    {
        name: 'google',
        notes: '',
        type: 'Process',
        startDate: '2019-01-05T11:19:05.000+0000',
        endDate: '2019-01-05T11:19:05.000+0000',
        startTime: '2019-01-05T11:19:05.000+0000',
        endTime: '2019-01-05T11:19:05.000+0000',
        eventParticipantList: [
            {
                id: 4,
                emailId: 'test'
            }
        ]
    },
    {
        name: 'deni',
        notes: 'demo',
        type: 'Management',
        startDate: '2019-01-05T11:20:33.000+0000',
        endDate: '2019-01-05T11:20:33.000+0000',
        startTime: '2019-01-05T11:20:33.000+0000',
        endTime: '2019-01-05T11:20:33.000+0000',
        eventParticipantList: [
            {
                id: 5,
                emailId: 'test'
            }
        ]
    },
    {
        name: 'asdfasd',
        notes: 'asdf',
        type: 'Management',
        startDate: '2019-01-05T11:21:12.000+0000',
        endDate: '2019-01-05T11:21:12.000+0000',
        startTime: '2019-01-05T11:21:12.000+0000',
        endTime: '2019-01-05T11:21:12.000+0000',
        eventParticipantList: [
            {
                id: 6,
                emailId: 'test'
            }
        ]
    },
    {
        name: 'asf',
        notes: '',
        type: 'Management',
        startDate: '2019-01-05T11:23:44.000+0000',
        endDate: '2019-01-05T11:23:44.000+0000',
        startTime: '2019-01-05T11:23:44.000+0000',
        endTime: '2019-01-05T11:23:44.000+0000',
        eventParticipantList: [
            {
                id: 7,
                emailId: 'sd@cognizant.com'
            }
        ]
    },
    {
        name: 'Demo',
        notes: 'asdfa',
        type: 'Management',
        startDate: '2019-01-05T11:26:15.000+0000',
        endDate: '2019-01-05T11:26:15.000+0000',
        startTime: '2019-01-05T11:26:15.000+0000',
        endTime: '2019-01-05T11:26:15.000+0000',
        eventParticipantList: [
            {
                id: 8,
                emailId: 'one@cognizant.com'
            },
            {
                id: 9,
                emailId: 'two@cognizant.com'
            },
            {
                id: 10,
                emailId: 'three@cognizant.com'
            }
        ]
    },
    {
        name: '',
        notes: '',
        type: '',
        startDate: '2019-01-05T11:52:50.000+0000',
        endDate: '2019-01-05T11:52:50.000+0000',
        startTime: '2019-01-05T11:52:50.000+0000',
        endTime: '2019-01-05T11:52:50.000+0000',
        eventParticipantList: []
    },
    {
        name: '',
        notes: '',
        type: '',
        startDate: '2019-01-05T11:56:09.000+0000',
        endDate: '2019-01-05T11:56:09.000+0000',
        startTime: '2019-01-05T11:56:09.000+0000',
        endTime: '2019-01-05T11:56:09.000+0000',
        eventParticipantList: []
    },
    {
        name: '',
        notes: '',
        type: '',
        startDate: '2019-01-05T11:57:16.000+0000',
        endDate: '2019-01-05T11:57:16.000+0000',
        startTime: '2019-01-05T11:57:16.000+0000',
        endTime: '2019-01-05T11:57:16.000+0000',
        eventParticipantList: []
    },
    {
        name: 'demoFunny',
        notes: '',
        type: 'Technical',
        startDate: '2019-01-05T12:25:14.000+0000',
        endDate: '2019-01-05T12:25:14.000+0000',
        startTime: '2019-01-05T12:25:14.000+0000',
        endTime: '2019-01-05T12:25:14.000+0000',
        eventParticipantList: [
            {
                id: 11,
                emailId: 's@cognizant.com'
            }
        ]
    },
    {
        name: 'BankingDummy',
        notes: 'Demo',
        type: 'Management',
        startDate: '2019-01-09T11:56:35.000+0000',
        endDate: '2019-01-16T11:56:35.000+0000',
        startTime: '2019-01-08T11:56:36.000+0000',
        endTime: '2019-01-08T11:56:36.000+0000',
        eventParticipantList: [
            {
                id: 12,
                emailId: 'ganesan@cognizant.com'
            }
        ]
    },
    {
        name: 'Demo1Dummy',
        notes: 'asdf',
        type: 'Technical',
        startDate: '2019-01-05T09:50:52.000+0000',
        endDate: '2019-01-05T09:50:52.000+0000',
        startTime: '2019-01-05T09:50:52.000+0000',
        endTime: '2019-01-05T09:50:52.000+0000',
        eventParticipantList: [
            {
                id: 13,
                emailId: 'ganesan@gmail.com'
            }
        ]
    }
]
};

const reducer: Reducer<EventState> = (state: EventState = initialState, action: AnyAction): EventState => {
    switch (action.type) {
        case UPCOMING_EVENTS:
            return {
                ...state,
                eventDetails: action.eventDetails,
            };
            case TODAY_EVENTS:
            return {
                ...state,
                todayEvents: action.todayEvents,
            };    
        default:
            return state;
    }
};

export default reducer;
