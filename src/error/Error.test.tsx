import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Error, { ErrorProps } from './Error';

describe('Error page', () => {
    const props: ErrorProps = {
        onSubmit: () => undefined,
        errorTitle: '',
        errorMessage: '',
        errorStates: ''
    };
    it('should show eSim Number Span', () => {
        const wrapper: ShallowWrapper<Error> = shallow(<Error {...props} />);
        expect(wrapper.find('#simNumber').exists());
    });

});
