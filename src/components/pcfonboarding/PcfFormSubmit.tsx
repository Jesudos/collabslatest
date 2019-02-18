import * as React from 'react';
import './PcfForm.css';

export class PcfFormSubmit extends React.Component<PcfFormSubmitProps, PcfFormSubmitState> {

    state: PcfFormSubmitState = {
        enableFlag: false
    };

    constructor(parameters: PcfFormSubmitProps) {
        super(parameters);
    }

    render() {
        const btnClass = this.state.enableFlag ? 'btn btn-primary btn-lg active btn-space' : 'btn btn-primary btn-lg disabled btn-space';

        return (
            <div>
                <p>
                    These Pivotal Software Support Services Terms and Conditions (the “Agreement”) set forth the terms governing the provision of Support Services by Pivotal to Licensee.
                     The terms herein supplement the terms and conditions of Pivotal’s End-User License Agreement, Master Ordering Agreement, or other applicable
                      signature-bearing agreement that references the Pivotal Product Guide (“EULA”). As used herein, “Pivotal” and “Licensee” mean, respectively,
                      the applicable licensor and licensee that entered into the EULA. Capitalized terms not defined herein shall have the same meaning as defined in the EULA.
                      In the event of a conflict between the terms of this Agreement and those of the EULA, the terms set forth in the EULA shall supersede and control.
                    </p>
                <p> 1. Definitions
                    Error means a failure in the Software to materially conform to the specifications described in the Documentation.
                    Modified Code means any modification, addition and/or development of code scripts deviating from the predefined product code tree(s)/modules developed by Pivotal
                    for production deployment or use. Modified Code excludes customizable Software options for which Pivotal offers Support Services on the applicable Pivotal price list.
                    Severity is a measure of the relative impact an Error has on the use of the Software, as defined by Pivotal, and assigned by Licensee when opening a Support request.
                    Severity One means Licensee’s production server or other mission critical system(s) are down and no workaround is immediately available and (i) all or a substantial
                    portion of Licensee’s mission critical data is at a significant risk of loss or corruption; (ii) Licensee has had a substantial loss of service; or (iii) Licensee’s
                    business operations have been severely disrupted.
                    Severity Two means that major functionality is severely impaired such that (i) operations can continue in a restricted fashion, although long-term productivity
                    might be adversely affected; (ii) a major milestone is at risk; ongoing and incremental installations are affected; or (iii) only a temporary workaround is available.
                    Severity Three means a partial, non-critical loss of functionality of the Software such that: (i) the operation of some component(s) is impaired but allows the
                    user to continue using the Software; or (ii) initial installation milestones are at minimal risk.
                    Severity Four means general usage questions and cosmetic issues, including errors in the Documentation. </p>
                <p>
                    Software Release means any subsequent version of the Software provided by Pivotal after initial delivery of the Software, but does not include new Software products or services (as determined by Pivotal).
                    Major Release, also known as an “Upgrade”, means a generally available release of the Software that (i) contains functional enhancements and extensions,
                    (ii) fixes for high severity and high priority bugs, and
                    (iii) is designated by Pivotal by means of a change in the digit to the left of the first decimal point (e.g., Software 5.0 >> Software 6.0).
                    Minor Release means a generally available release of the Software that
                    (i) introduces a limited amount of new features, functionality and minor enhancements;
                    (ii) fixes for high severity and high priority bugs identified in the current release, and
                    (iii) is designated by Pivotal by means of a change in the digit to the right of the decimal point (e.g., Software 5.0>>Software 5.1).
                    Maintenance Release means a generally available release of the Software that typically provides
                    maintenance corrections only or high severity bug fixes, designated by Pivotal by means of a change in the digit
                    to the right of the second decimal point (e.g. Software 5.0 >> Software 5.0.1), or for certain Software, by means of a change in the digit of the Update number (e.g. Software 5.0 Update 1).
                    Technical Support Services means the provision of telephone or web-based technical assistance
                    by Pivotal to Licensee’s technical contact(s) with respect to installation, Errors and technical product problems, at the corresponding Support Services level purchased by Licensee.

                </p>

                <div><input id="checkBox" className="pcfFormSubmitCheckbox" type="checkbox" checked={this.state.enableFlag} onChange={this.onClickCheckBox} />
                    <span onClick={this.onClickCheckBox}><a href="#checkBox" className="pcfFormSubmitText">I agree to the Terms and Conditions</a></span>
                    <span>{this.props.reqType}</span>
                        
                </div>
                <button className={btnClass} onClick={this.onAcceptClick}>ACCEPT</button>
            </div>
        );
    }

    onClickCheckBox = () => {

        this.setState(() => {
            return {
                enableFlag: !this.state.enableFlag
            };
        });
    }

    onAcceptClick = () => {
        if (this.state.enableFlag) {
            console.error('Call API Here');
        } else {
            console.error('Accept Flag is not enabled');
            alert('Please Accept Terms & Condition');
        }

    }
}
export interface PcfFormSubmitState {
    enableFlag: boolean;
}

export interface PcfFormSubmitProps {
    reqType: string;
}
