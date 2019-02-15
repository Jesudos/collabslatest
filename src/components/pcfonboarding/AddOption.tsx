import * as React from 'react';
import './AddOption.css';

export class AddOption extends React.Component<AddOptionProps, AddOptionState> {
    state: AddOptionState = {
        
    };
    constructor(parameters: AddOptionProps) {
        super(parameters);
        
    }  
    optionClick = () => {
        this.props.optionClick(this.props.option);
    }

    render() {
        return (
        
               <button className="optionStyle"  onClick={this.optionClick}>
                {this.props.option}
            </button> 
            
        );
    }
}

export interface AddOptionState {
    
}

export interface AddOptionProps {
   option: string; 
   optionClick: Function ;
}
