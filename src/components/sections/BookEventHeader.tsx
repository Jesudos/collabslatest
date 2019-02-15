import * as React from 'react';
import EventButton from '../../components/buttons/EventButton';

export interface ButtonProps {
    btnElement: string;
    btnType: string;
    clickEvt: () => void;
}

export const BookEventHeader: React.StatelessComponent<ButtonProps> = (props) => {

    return (
        <div id="home" className="hero-area">
            <div className="bg-image bg-parallax overlay">&nbsp;</div>
            <div className="home-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <h1 className="white-text">
                            Engage. Collaborate. Experience Learning by Doing. 
                            </h1>
                            <p>&nbsp;</p>
                            <p className="sub-white-text">
                            <ol>
                            <li>Ready-to-access engineering infrastructure</li>
                            <li>Tools to fast track cloud native development and transformation</li>
                            <li>Lean with Agile execution experience</li>
                            <li>Focus on value stream and reducing waste</li>
                            </ol>
                            </p>
                            <p>&nbsp;</p>
                            <p className="lead-white-text">
                            You can book Cognizant Labs to conduct the following: product demos, customer visits, 
                            environment onboarding for development of working prototypes, and sessions such as Tech Talk, 
                            event storming, and retros, 
                            </p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <EventButton
                                btnElement={props.btnElement}
                                btnType={props.btnType}
                                clickEvt={props.clickEvt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookEventHeader;
