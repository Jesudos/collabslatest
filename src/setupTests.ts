import 'raf/polyfill';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Global = NodeJS.Global;
import 'jest-localstorage-mock';

Enzyme.configure({adapter: new Adapter()});

interface TestGlobal extends Global {
    Visitor: object;

    AppMeasurement(): AdobeAppMeasurement;
}

declare var global: TestGlobal;

export const mockAppMeasurement = {
    t: jest.fn(),
    tl: jest.fn(),
    account: '',
    visitor: {},
    visitorNamespace: '',
    trackingServer: '',
};
global.AppMeasurement = () => mockAppMeasurement;
global.Visitor = {
    getInstance: jest.fn(),
};
