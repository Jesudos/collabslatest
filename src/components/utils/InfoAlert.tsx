
import * as React  from 'react';

export interface InfoProps {
    message: string;    
}

export const InfoAlert: React.StatelessComponent<InfoProps> = (props) => {

    return (
        <div className="alert alert-info">
            <h4>{props.message}</h4>
        </div>
    );
};

export default InfoAlert;
