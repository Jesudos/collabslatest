
import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export interface TitleComponentProps {
    label: string;
}

const TitleComponent: React.StatelessComponent<TitleComponentProps> = (props) => {
    return (<div>{props.label}</div>);
};

export interface TextInputFieldComponentProps {
    label: string;
    value: number;
    onchangeEvent: (s: number) => void;
}

class TextInputFieldComponent extends React.Component<TextInputFieldComponentProps> {

    handleClick = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue: number = +e.currentTarget.value;
        this.props.onchangeEvent(newValue);
    }

    render() {
        return (<input onChange={this.handleClick} type="text" placeholder={this.props.label} />);
    }
}

export interface EventBtnProps {
    onBtnClick: (s: number) => void;
}

class EventBtn extends React.Component<EventBtnProps> {
    handleClick = () => {
        this.props.onBtnClick(10);
    }
    render() {
        return (<button onClick={this.handleClick} >Browse</button>);
    }
}

type MyState = {
    counter: number;
    link: number;
};

export interface EventFormProps {
}

export class EventForm extends React.Component<EventFormProps, MyState> {

    constructor(props: EventFormProps) {
        super(props);
        this.state = {
            counter: 11,
            link: 1
        };
    }

    incrementCounter = (s: number) => {
        this.setState((lastestState) => {
            return {
                counter: lastestState.counter + lastestState.link
            };
        });
    }

    setValue = (s: number) => {
        this.setState((lastestState) => {
            return {
                link: s
            };
        });
    }

    handleChange(date: Date) {
        console.error(date);
    }

    render() {
        return (
            <div>
                <TitleComponent label="Presentation with Dev team" />
                <TitleComponent label="Event Name" />
                <TextInputFieldComponent value={2} label="Bunsiness Analysis Daily Meetup" onchangeEvent={this.setValue} />
                <TitleComponent label="Event Type" />
                <TitleComponent label="Start Date" />
                <TitleComponent label="End Date" />
                <TitleComponent label="Event Participants" />
                <TitleComponent label="Event Notes" />
                <TitleComponent label="Attachments" />
                <div><TextInputFieldComponent value={this.state.link} label="Enter Box Link" onchangeEvent={this.setValue} />
                    <EventBtn onBtnClick={this.incrementCounter} /></div>
                <div>{this.state.counter}</div>
                <DatePicker onChange={this.handleChange} showTimeSelect showTimeSelectOnly dateFormat="h:mm aa" timeCaption="Time" />

            </div>
        );
    }
}
