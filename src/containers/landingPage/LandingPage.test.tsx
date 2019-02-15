import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import LandingPage, { LandingPageProps } from './LandingPage';

describe('LandingPage page', () => {
    const props: LandingPageProps = {
        onSubmit: () => undefined,
        onComponentDidMount: () => undefined,
        bookEvent: () => undefined,
        btnElement: 'fdsfds',
        btnType: 'signin',
        upcomingEvents: [],
        blogEvents: []
    };

    it('should show eSim Number Span', () => {
        const wrapper: ShallowWrapper<LandingPage> = shallow(<LandingPage {...props} />);
        expect(wrapper.find('#simNumber').exists());
    });

});
