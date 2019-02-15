
import * as React  from 'react';

export interface ButtonProps {
    btnElement: string;
    btnType: string;
    clickEvt: () => void;
}

export const EventButton: React.StatelessComponent<ButtonProps> = (props) => {

    return (
                <button id="btn_signin" className="btn eventbutton" type={props.btnType} onClick={props.clickEvt}>
                    {props.btnElement}
                </button>
    );
};

export default EventButton;
