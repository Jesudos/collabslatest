import * as fetchMock from 'fetch-mock';
import { loadEnvironment } from './Environment';

describe('prepaid service actions', () => {
    describe('loadEnvironment', () => {
        it('fetches the config json and dispatch LOAD_ENVIRONMENT', async () => {
            fetchMock.getOnce('/config.json', {SOME_ENVIRONMENT_VARIABLE: 'abc'});

            const environment = await loadEnvironment();

            expect(fetchMock.done()).toBe(true);
            expect(environment).toEqual({SOME_ENVIRONMENT_VARIABLE: 'abc'});
        });
    });
});
