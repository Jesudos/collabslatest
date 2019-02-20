import * as React from 'react';
import './PcfForm.css';
import { AddOption } from 'src/components/pcfonboarding/AddOption';
import { NewSpace } from 'src/components/pcfonboarding/NewSpace';

export class PcfForm extends React.Component<PcfFormProps, PcfFormState> {
    constructor(parameters: PcfFormProps) {
        super(parameters);
        this.state = {
            requirementType: '',
            option: '',
            space: '',
            newSpace: false,
            showNewSpace: false,
            employeeid: '',
            employeename: '',
            businessjustification: '',
            supervisorid: '',
            supervisorname: '',
            vertical: ''
        };
        this.onemployeeidChange = this.onemployeeidChange.bind(this);
        this.onemployeenameChange = this.onemployeenameChange.bind(this);
        this.onbusinessChange = this.onbusinessChange.bind(this);
        this.onsupervisoridChange = this.onsupervisoridChange.bind(this);
        this.onverticalChange = this.onverticalChange.bind(this);
        this.onsupervisornameChange = this.onsupervisornameChange.bind(this);
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
    requirementClick = (val: string) => {
        this.setState({
            requirementType: val
        });
    }
    requirementUnClicked = () => {
        this.setState({ requirementType: '' });
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
    onemployeeidChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({employeeid: e.currentTarget.value});
      }
      onemployeenameChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({employeename: e.currentTarget.value});
      }
      onbusinessChange(e: React.FormEvent<HTMLTextAreaElement>) {
        this.setState({businessjustification: e.currentTarget.value});
      }
      onsupervisoridChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({supervisorid: e.currentTarget.value});
      }
    onsupervisornameChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({supervisorname: e.currentTarget.value});
      }
      onverticalChange(e: React.FormEvent<HTMLSelectElement>) {
        this.setState({vertical: e.currentTarget.value});
      }
    render() {
        return (
            <div>
                 <div className="paddingDiv">
                    <p className="pcfFormTitle">Select your requirement type</p>
                    <AddOption option="PCF Org/Space /User Allocation" optionClick={this.requirementClick} optionUnClicked={this.requirementUnClicked} />
                    <AddOption option="Product Onboarding" optionClick={this.requirementClick} optionUnClicked={this.requirementUnClicked} />
                </div><br /><br />
                <div className="borderTop">
                   <h4> <p className="pcfFormTitle">PCF Org/Space /User Allocation Questionnaire</p></h4>
                    <p className="pcfFormTitle">Select your requirement</p>
                    <AddOption option="Org for a practice/vertical" optionClick={this.optionClick} optionUnClicked={this.optionUnClicked} />
                    <AddOption option="New space" optionClick={this.optionClick} optionUnClicked={this.optionUnClicked} />
                    <AddOption option="User access to an existing space" optionClick={this.optionClick} optionUnClicked={this.optionUnClicked} />
                    <AddOption option="User access extension to an existing space" optionClick={this.optionClick} optionUnClicked={this.optionUnClicked} />
                    <AddOption option="Kubernetes cluster" optionClick={this.optionClick} optionUnClicked={this.optionUnClicked} />
                </div><br /><br /><br/>
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
                <div id="employeedetails" className="borderTopBottom">
                    
                    <div id="employeeid"><label>Employee ID</label>
                    <input type="text"name="employeeid" value={this.state.employeeid} onChange={this.onemployeeidChange}  /></div>
                    <div id="employeename"><label>Employee Name</label>
                    <input type="text"name="employeename" value={this.state.employeename} onChange={this.onemployeenameChange}/></div>
                    <div id="businessjustification"><label>Enter Business Justification for the request</label>
                    <textarea name="businessjustification" value={this.state.businessjustification} onChange={this.onbusinessChange}/></div>
                    <div id="supervisorid"><label>HCM Supervisor ID</label>
                    <input type="text"name="supervisorid" value={this.state.supervisorid} onChange={this.onsupervisoridChange} /></div>
                    <div id="supervisorname"><label>HCM Supervisor Name</label>
                    <input type="text"name="supervisorname" value={this.state.supervisorname} onChange={this.onsupervisornameChange}/></div><br/>
                    <div id="vertical">
                    <label>Select your vertical</label>
                    <select value={this.state.vertical} onChange={this.onverticalChange}>
                      <option value="bfs">BFS</option>
                      <option value="insurance">Insurance</option>
                    </select></div>
                </div>
            
            </div>

        );
    }
}

export interface PcfFormState {
    requirementType: string;
    option: string;
    space: string;
    newSpace: boolean;
    showNewSpace: boolean;
    employeeid: string;
    employeename: string;
    businessjustification: string;
    supervisorid: string;
    supervisorname: string;
    vertical: string;
}

export interface PcfFormProps {
    title: string;
    callBackFunc: Function;
}
