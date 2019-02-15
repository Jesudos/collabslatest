import { ReducersMapObject } from 'redux';
import { routerReducer } from 'react-router-redux';
import environment, { EnvironmentState } from './environment/Environment';

import events, { EventState } from './reducers/events';

export const reducers: ReducersMapObject = {
    events,
    environment,
    router: routerReducer
};

export interface AppState {
    events: EventState;
    environment: EnvironmentState;
}

export const emptyAppState: () => AppState = () => ({
    events: {},
    environment: {}
});
