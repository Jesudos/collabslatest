import * as React from 'react';
import './PcfForm.css';
import { AddOption } from 'src/components/pcfonboarding/AddOption';
import { NewSpace } from 'src/components/pcfonboarding/NewSpace';

export class PcfForm extends React.Component<PcfFormProps, PcfFormState> {
    constructor(parameters: PcfFormProps) {
        super(parameters);
        this.state = {
            option: '',
            space: '',
            newSpace: false,
            showNewSpace: false
        };
    }
    optionClick = (val: string) => {
        this.setState({
            option: val
        });
        val === 'New space' ? this.setState({ showNewSpace: true }) : this.setState({ showNewSpace: false });
        this.props.callBackFunc(val);
    }
    optionUnClicked = () => {
        this.setState({ option: '' });
    }
    onSpaceClick = (val: string) => {
        this.setState({
            space: val,
            newSpace: false
        });
    }
    buttonClick = () => {
        this.setState({
            newSpace: true
        });
    }
    onUpdate = (val: string) => {
        this.setState({
            space: val,
        });
    }
    render() {
        return (
            <div>
                <div>
                    <p className="pcfFormTitle">Select your requirement type</p>
                    <AddOption option="Org for a practice/vertical" optionClick={this.optionClick} optionUnClicked={this.optionUnClicked} />
                    <AddOption option="New space" optionClick={this.optionClick} optionUnClicked={this.optionUnClicked} />
                    <AddOption option="User access to an existing space" optionClick={this.optionClick} optionUnClicked={this.optionUnClicked} />
                    <AddOption option="User access extension to an existing space" optionClick={this.optionClick} optionUnClicked={this.optionUnClicked} />
                    <AddOption option="Kubernetes cluster" optionClick={this.optionClick} optionUnClicked={this.optionUnClicked} />
                    {this.state.option}
                </div><br /><br />
                {this.state.showNewSpace ?
                    <div>
                        
                         <NewSpace onUpdate={this.onUpdate} /> <br/>
                    </div> : null
                }
                {/* <div>
                    <p className="pcfFormTitle2">Select Space for which access is required or Select New Space and provide a Space name</p>
                    <AddOption option="Space1" optionClick={this.onSpaceClick} optionUnClicked={this.optionUnClicked} />
                    <AddOption option="Space2" optionClick={this.onSpaceClick} optionUnClicked={this.optionUnClicked} />
                    {this.state.space}
                    <button className="selectStyle" onClick={this.buttonClick}>New Space</button><br /><br />
                    {this.state.newSpace ? <NewSpace onUpdate={this.onUpdate} /> : null}
                </div> */}<br/>
                <div id="employeedetails">
                    
                    <div id="employeeid"><label>Employee ID</label>
                    <input type="text"name="employeeid"  /></div>
                    <div id="employeename"><label>Employee Name</label>
                    <input type="text"name="employeename" /></div>
                    <div id="businessjustification"><label>Enter BusinessJustification for the request</label>
                    <textarea name="businessjustification" /></div>
                    <div id="supervisorid"><label>HCM Supervisor ID</label>
                    <input type="text"name="supervisorid" /></div>
                    <div id="supervisorname"><label>HCM Supervisor Name</label>
                    <input type="text"name="supervisorname" /></div>
                </div>
            
            </div>

        );
    }
}

export interface PcfFormState {
    option: string;
    space: string;
    newSpace: boolean;
    showNewSpace: boolean;
}

export interface PcfFormProps {
    title: string;
    callBackFunc: Function;
}
