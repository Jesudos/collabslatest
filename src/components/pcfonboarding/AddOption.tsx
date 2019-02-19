import * as React from 'react';
import './AddOption.css';

export class AddOption extends React.Component<AddOptionProps, AddOptionState> {
    state: AddOptionState = {
        buttonClicked: false
    };
    constructor(parameters: AddOptionProps) {
        super(parameters);
    }
    optionClick = () => {
        this.props.optionClick(this.props.option);
        this.setState({ buttonClicked: !this.state.buttonClicked });
    }
    optionUnClicked = () => {
        this.setState({ buttonClicked: !this.state.buttonClicked });
    }

    render() {
        return (
            <div>
                <button className="optionStyle" onFocus={this.optionClick} onBlur={this.optionUnClicked}>
                    <i className={this.state.buttonClicked ? 'fa fa-check-circle iconStyle onCLickIconColor' : 'fa fa-check-circle iconStyle'} />
                    {this.props.option}
                </button>
            </div>
        );
    }
}

export interface AddOptionState {
    buttonClicked: boolean;
}

export interface AddOptionProps {
    option: string;
    optionClick: Function;
    optionUnClicked: Function;
}
