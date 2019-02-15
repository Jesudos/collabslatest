import 'raf/polyfill';
import 'whatwg-fetch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore, AnyAction } from 'redux';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { reducers } from './redux';
import { loadEnvironment, STORE_ENV_CONFIG } from './environment/Environment';
import AppRouter from './AppRouter';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storageSession from 'redux-persist/lib/storage/session';
import createCompressEncryptor from 'redux-persist-transform-compress-encrypt';

const initializeApp = async () => {
    const environment = await loadEnvironment();

    if (environment.DEV_MODE) {
        console.error('NOTICE: Running in DEV mode.');
    }

    const uuidv4 = require('uuid/v4');

    let secretPersistKey: string = uuidv4();
    if (sessionStorage.getItem('ENV_PST')) {
        secretPersistKey = sessionStorage.getItem('ENV_PST') || '';
    } else {
        sessionStorage.setItem('ENV_PST', secretPersistKey);
    }
    const history = createBrowserHistory();
    const encryptor = createCompressEncryptor({
         secretKey: secretPersistKey,
         onError: function(error: Error) {
            return null;
          }
    });

    const persistKey = 'rt:'.concat('collabs');
    const persistConfig = {
         key: persistKey,
         storage: storageSession,
         transforms: [encryptor]
    };

    const pReducer = persistCombineReducers(persistConfig, reducers);

    const store = createStore(
        pReducer,
        applyMiddleware(thunk, routerMiddleware(history))
    );
    
    const storeEnvConfig = () => ({type: STORE_ENV_CONFIG,
                                   DEV_MODE: environment.DEV_MODE,
                                   API_URL: environment.API_URL,
                                   } as AnyAction);

    const persistor = persistStore(store);
    storageSession.getItem('reference:'.concat(persistKey))
                  .then((data: string) => { 
                               if (!data) {
                                    store.dispatch(storeEnvConfig());
                               } 
                  });                                       

    ReactDOM.render(
        (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ConnectedRouter history={history}>
                        <AppRouter/>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        ),
        document.getElementById('root') as HTMLElement
    );
};

initializeApp().catch(() => {
    ReactDOM.render(
        (
            <div style={{marginTop: '40px'}}>Failed to load configuration! Please try again later.</div>
        ),
        document.getElementById('root') as HTMLElement
    );
});
