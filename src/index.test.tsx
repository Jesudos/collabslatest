import { mount } from 'enzyme';
import * as React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

describe('Test to load Index page', () => {
    const initialState = {environment:
          {'ESIM_LIVE_PERSON_URL' : 'https://publish.uat.tcom.corp.telstra.com/apps/liveperson/import.htm' }};
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const persistor = persistStore(store);

    const addTodo = () => ({ type: 'ADD_TODO' });
    const wrapper = mount( <Provider store={store}><PersistGate persistor={persistor} /></Provider> );

    it('Test to validate if a container is loaded appropriately', () => {
       expect(wrapper.find(Provider).length).toEqual(1);
    });

    it('Test to Dispatch and check for Persisted state', () => {
      store.dispatch(addTodo());
      const actions = store.getActions();
      const expectedPersit = 'persist/PERSIST' ;
      const expectedPayload =  {'type': 'ADD_TODO'} ;
      expect(actions[0].type).toEqual(expectedPersit);
      expect(actions[1]).toEqual(expectedPayload);
    });
});
