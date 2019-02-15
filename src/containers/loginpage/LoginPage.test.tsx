import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import LoginPage, { LoginPageProps } from './LoginPage';

describe('LandingPage page', () => {
    const props: LoginPageProps = {
        onSubmit: () => undefined,
        onComponentDidMount: (url: string) => undefined,
        btnElement: 'fdsfds',
        btnType: 'signin'
    };

    it('should show eSim Number Span', () => {
        const wrapper: ShallowWrapper<LoginPage> = shallow(<LoginPage {...props} />);
        expect(wrapper.find('#simNumber').exists());
    });

});
