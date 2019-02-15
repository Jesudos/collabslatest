import * as React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import './AddEvent.css';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

export interface EventCategory {
    name: string;
    id: number;
}

export default class AddEventForm extends React.Component<AddEventProps, AddEvent> {
    state: AddEvent = {
        name: '',
        type: 0,
        notes: '',
        email: '',
        startDate: new Date(),
        endDate: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        participantIds: [],
        error: [],
        eventCategory: [],
        options: []
    };

    constructor(parameters: AddEventProps) {
        super(parameters);
    }

    componentDidMount() {        
        if (this.props.startDate) {
            this.setState(() => {
                return {
                    startDate: this.props.startDate,
                    startTime: this.props.startDate
                };
            });
        } else if (this.props.defaultDate) {
            this.setState(() => {
                return {
                    startDate: this.props.defaultDate,
                    startTime: this.props.defaultDate
                };
            });
        }

        if (this.props.endDate) {
            this.setState(() => {
                return {
                    endDate: this.props.endDate,
                    endTime: this.props.endDate
                };
            });
        } else if (this.props.defaultDate) {
            this.setState(() => {
                return {
                    endDate: this.props.defaultDate,
                    endTime: this.props.defaultDate
                };
            });
        }
        axios.get(`https://collabsapi.apps.dev.cloudsprint.io/event/category`)
            .then(res => {
                const tempOptions: { value: number, label: string }[] = [];
                res.data.map((key: EventCategory) => {
                    tempOptions.push({ value: key.id, label: key.name });
                    console.error(key.name);
                });
                this.setState(() => {
                    return {
                        options: tempOptions
                    };
                });
            });
    }

    render() {

        return (
            <div className="eventForm">
                <h4>Event Details Form
                    <button type="button" onClick={this.props.onCancelClick} className="close eventClostBtn" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </h4>
                <ul className="participantList">
                    {this.state.error.map((msg: string, index: number) => <li className="errorItem" key={index}>{msg}</li>)}
                </ul>
                <div className="addEventTitle">Event Name</div>
                <div>
                    <input className="eventInput" size={50} type="text" onChange={this.onEventNameChange} />
                </div>
                <p />
                <div className="addEventTitle">Event Type</div>
                <div>
                    <Select className="eventInput" options={this.state.options} onChange={this.onEventTypeChange} /></div>
                <br />

                <div className="addEventTitle">Start Date</div>
                <div>
                    <DatePicker className="eventDatePicker" minDate={new Date()} selected={this.state.startDate} onChange={this.handleStartDateChange} />
                    <DatePicker className="eventTimePicker" selected={this.state.startTime} onChange={this.handleStartTimeChange} showTimeSelect showTimeSelectOnly dateFormat="h:mm aa" timeCaption="Time" />
                </div><br />
                <div className="addEventTitle">End Date</div>

                <div>
                    <DatePicker className="eventDatePicker" minDate={this.state.startDate} selected={this.state.endDate} onChange={this.handleEndDateChange} />
                    <DatePicker className="eventTimePicker" selected={this.state.endTime} onChange={this.handleEndTimeChange} showTimeSelect showTimeSelectOnly dateFormat="h:mm aa" timeCaption="Time" />
                </div><br /><br />

                <div className="addEventTitle">Event Participants {this.state.participantIds.length === 0 ? '' : (this.state.participantIds.length)}</div>
                <div className="block-example border border-light">
                    <input className=" userInput eventInput" type="text" value={this.state.email} placeholder="Enter Email " onChange={this.onEmailChange} />
                    <button className="userActionBtn btn btn-primary" onClick={this.onAddEmailClick}>Add</button>
                </div>
                <ul className="participantList">
                    {this.state.participantIds.slice(0, 5).map((email: string, index: number) =>
                        <li className="participantItem" key={index}>
                            <div>
                                <span className="userInput">{this.truncate(email)} </span>
                                <button type="button" tabIndex={index} onClick={this.onRemoveEmail} className="close eventClostBtn" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                        </li>)}
                </ul>
                <br />
                <div className="addEventTitle">Event Notes</div>
                <div><textarea className="eventInput form-control" onChange={this.handleTextAreaChange} /></div><br />

                <div className="addEventTitle">Attachments</div>
                <div className="block-example border border-light">
                    <input className="userInput eventInput" type="text" placeholder="Enter Box Link" />
                    <button className="userActionBtn btn btn-primary">Browse</button></div>
                <br /><br />
                <div className="block-example border border-light">
                    <button className="actionCancelBtn  btn" onClick={this.props.onCancelClick}>Cancel Event</button>
                    <button className="actionBtn  btn btn-primary" onClick={this.onSubmitEvent}>Create Event</button>
                </div>

            </div >
        );
    }

    onRemoveEmail = (e: React.FormEvent<HTMLButtonElement>) => {
        console.error(+e.currentTarget.tabIndex);
        this.state.participantIds.splice(e.currentTarget.tabIndex, 1);
        const tempList: string[] = this.state.participantIds;
        this.setState(() => {
            return {
                participantIds: tempList
            };
        });
    }

    truncate = (s: string) => {
        // return (s.length >= 10) ? s.slice(0, 10) : s;
        return s;
    }

    onAddEmailClick = () => {
        const result = this.state.participantIds.length === 0 ? -1 : this.state.participantIds.findIndex(item => this.state.email.toLowerCase() === item.toLowerCase());
        if ((result < 0) && (/^[a-zA-Z0-9.]+@cognizant.com+$/.test(this.state.email))) {
            this.state.participantIds.push(this.state.email);
            this.setState(() => {
                return {
                    email: ''
                };
            });
        }
        console.error(this.state.participantIds);
    }

    handleStartDateChange = (date: Date) => {
        this.setState(() => {
            return {
                startDate: date,
                endDate: date
            };
        });
        console.error(date);
    }

    handleEndDateChange = (date: Date) => {
        this.setState(() => {
            return {
                endDate: date
            };
        });
        console.error(date);
    }

    handleStartTimeChange = (date: Date) => {
        this.setState(() => {
            return {
                startTime: date
            };
        });
        console.error(date);
    }

    handleEndTimeChange = (date: Date) => {
        this.setState(() => {
            return {
                endTime: date
            };
        });
        console.error(date);
    }

    onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value: string = e.currentTarget.value;
        this.setState(() => {
            return {
                email: value
            };
        });
    }

    handleTextAreaChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const value: string = e.currentTarget.value;
        this.setState(() => {
            return {
                notes: value
            };
        });
    }

    onEventNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value: string = e.currentTarget.value;
        this.setState(() => {
            return {
                name: value
            };
        });
    }

    onEventTypeChange = (value: { value: number, label: string }) => {
        this.setState(() => {
            return {
                type: value.value
            };
        });
    }

    onEventNotesChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value: string = e.currentTarget.value;
        this.setState(() => {
            return {
                notes: value
            };
        });
    }

    onSubmitEvent = () => {
        const errorList: string[] = [];
        if (this.state.name === '') {
            errorList.push('Event subject is missing');
        }

        if (this.state.type === 0) {
            errorList.push('Event Type is missing');
        }

        if (this.state.participantIds.length === 0) {
            errorList.push('No Participant found');
        }

        if (errorList.length !== 0) {
            this.setState(() => {
                return {
                    error: errorList
                };
            });
            return;
        }
        console.error(this.state.name);
        const emailsIds: { emailId: string }[] = [];
        this.state.participantIds.map((email: string) => {
            emailsIds.push({ emailId: email });
        });
        const event = {
            name: this.state.name,
            type: this.state.type,
            notes: this.state.notes,
            startDate: this.state.startDate,
            startTime: this.state.startTime,
            endDate: this.state.endDate,
            endTime: this.state.endTime,
            eventParticipantList: emailsIds
        };
        axios.post(`https://collabsapi.apps.dev.cloudsprint.io/event`, event)
            .then(res => {
                console.error(res.data);
                console.error('Completed');
                this.props.onUpdateBtnClick();
            });
    }
}

type AddEvent = {
    name: string;
    type: number;
    startDate: Date;
    startTime: Date;
    endDate: Date;
    endTime: Date;
    notes: string;
    email: string;
    participantIds: string[];
    error: string[];
    eventCategory: EventCategory[];
    options: { value: number, label: string }[];
    // attachments: string;
    // boxLink: string;
    // status: string;
};

export interface AddEventProps {
    onCancelClick: () => void;
    onUpdateBtnClick: () => void;
    startDate: Date;
    endDate: Date;
    defaultDate: Date;
}
