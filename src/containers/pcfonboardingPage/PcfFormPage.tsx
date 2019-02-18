import * as React from 'react';
import './PcfFormPage.css';
import { PcfForm } from 'src/components/pcfonboarding/PcfForm';
import Select from 'react-select/lib/Select';
import { PcfFormSubmit } from 'src/components/pcfonboarding/PcfFormSubmit';

export interface PcfFormPageProps {
    onComponentDidMount: (url: string) => void;
    onSubmit: () => void;
    btnElement: string;
    btnType: string;

}
const options = [
    { value: 'TCO', label: 'Cognizant Digital Lab - TCO' },
    { value: 'DGLSRZ', label: 'Digital Engineering Lab - SRZ' },
    { value: 'CDESRZ', label: 'CDE Co-Lab - SRZ' }
];
class PcfFormPage extends React.Component<PcfFormPageProps> {
    state = {
        showPcfForm: true,
        dataFromPcfForm: '',
    };

    pcfFormStates = (data: string) => {
        this.setState({
            dataFromPcfForm: data,
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="eventHeader">
                        <div className="col-sm-5">
                            <h4>Onboarding Request</h4>
                        </div>
                        <div className="col-sm-5">
                            <div className="selectClass">
                                <Select options={options} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    {this.state.showPcfForm
                        ? <PcfForm title="Onboarding Request" callBackFunc={this.pcfFormStates} />
                        : <PcfFormSubmit reqType={this.state.dataFromPcfForm} />
                    }
                </div>
                {
                    this.state.showPcfForm &&
                    <button className="btn btn-primary btn-md" onClick={this.onNextClick}>Next</button>
                }
            </div>
        );
    }

    onNextClick = () => {
        this.setState(() => {
            return {
                showPcfForm: false
            };
        });
    }

}

export default PcfFormPage;
