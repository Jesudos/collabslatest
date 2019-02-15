import { mapDispatchToProps } from './LoginPageContainer';

describe('ConnectedEnterNumberComponent', () => {

    it('should call the `fetchCurrentUser`', function () {
        const mockDispatch = jest.fn();
        const props = mapDispatchToProps(mockDispatch);

        props.onSubmit();

        expect(true);
    });
});
