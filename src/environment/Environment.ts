import { AnyAction, Reducer } from 'redux';

export const loadEnvironment = async (): Promise<EnvironmentState> => {
    const response = await fetch('/config.json', {method: 'GET'});

    try {
        return await response.json();
    } catch (error) {
        console.error('Could not load config.json!!');
        return Promise.reject('Could not load config.json!!');
    }
};

export interface EnvironmentState {
    DEV_MODE?: string;
    API_URL?: string;
}

export const STORE_ENV_CONFIG = 'environment/store-env-config';

const reducer: Reducer<EnvironmentState> =
    (state: EnvironmentState = {}, action: AnyAction): EnvironmentState => {
        switch (action.type) {
            case STORE_ENV_CONFIG:
                return {
                    ...state,
                    DEV_MODE: action.DEV_MODE,
                    API_URL: action.API_URL
                };
            default:
                return state;
        }
    };

export default reducer;
