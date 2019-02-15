import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import PcfFormPage, { PcfFormPageProps } from './PcfFormPage';

describe('LandingPage page', () => {
    const props: PcfFormPageProps = {
        onSubmit: () => undefined,
        onComponentDidMount: (url: string) => undefined,
        btnElement: 'fdsfds',
        btnType: 'signin'
    };

    it('should show eSim Number Span', () => {
        const wrapper: ShallowWrapper<PcfFormPage> = shallow(<PcfFormPage {...props} />);
        expect(wrapper.find('#simNumber').exists());
    });

});
