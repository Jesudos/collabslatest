
import * as React  from 'react';

export interface ButtonProps {
    btnElement: string;
    btnType: string;
    clickEvt: () => void;
}

export const Calendar: React.StatelessComponent<ButtonProps> = (props) => {

    return (
                <button id="btn_signin" className="btn btn-primary" type={props.btnType} onClick={props.clickEvt}>
                    {props.btnElement}
                </button>
    );
};

export default Calendar;
