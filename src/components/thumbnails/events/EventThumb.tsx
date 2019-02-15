
import * as React  from 'react';
import { convertToFormattedDate } from '../../../actions/basicActions';
export interface ButtonProps {
    cardImage?: string;
    cardTitle?: string;
    cardText?: string;
    cardDate?: string;    
    clickEvt: () => void;
}

export const EventThumb: React.StatelessComponent<ButtonProps> = (props) => {

    return (
        <div className="card card-left">
            <img src={props.cardImage} className="card-img-top imgsize" alt="Event"/>
            <div className="card-body">
                <p className="card-text card-date-text">{convertToFormattedDate(`${props.cardDate}`)}</p>
                <h5 className="card-title card-title-text">{props.cardTitle}</h5>
                <p className="card-text card-body-text">{props.cardText}</p>
            </div>
        </div>
    );   
};

export default EventThumb;
