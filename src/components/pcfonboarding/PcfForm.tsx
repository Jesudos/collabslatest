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
            newSpace: false,        };
    }
    optionClick = (val: string) => {
        this.setState({
            option: val
        });
        this.props.callBackFunc(val);
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
                    <AddOption option="Org for a practice/vertical" optionClick={this.optionClick} />
                    <AddOption option="New Space" optionClick={this.optionClick} />
                    <AddOption option="User access to an existing Space" optionClick={this.optionClick} />
                    <AddOption option="User access extension to an existing Space" optionClick={this.optionClick} />
                    <AddOption option="Kubernetes Cluster" optionClick={this.optionClick} />
                    {this.state.option}
                </div><br /><br />
                <div>
                    <p className="pcfFormTitle2">Select Space for which access is required or Select New Space and provide a Space name</p>
                    <AddOption option="Space1" optionClick={this.onSpaceClick} />
                    <AddOption option="Space2" optionClick={this.onSpaceClick} />
                    {this.state.space}
                    <button className="selectStyle" onClick={this.buttonClick}>New Space</button><br /><br />
                    {this.state.newSpace ? <NewSpace onUpdate={this.onUpdate} /> : null}
                </div>
            
            </div>
        );
    }
}

export interface PcfFormState {
    option: string;
    space: string;
    newSpace: boolean;
}

export interface PcfFormProps {
    title: string;
    callBackFunc: Function;
}
