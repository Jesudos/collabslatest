import * as React from 'react';

export interface ErrorProps {
    onSubmit: () => void;
    errorTitle: string;
    errorMessage: string;
    errorStates: string;
}

class Error extends React.Component<ErrorProps> {
    render() {
        return (
            <div>Error</div>
        );
    }
}

export default Error;
