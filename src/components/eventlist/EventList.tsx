import * as React from 'react';
import Calendar from 'react-calendar';
import './EventList.css';
import { EventDetail, EventParticipant } from 'src/reducers/events';
import * as moment from 'moment';

export interface EventListProps {
    setDefaultDate: (date: Date) => void;
    todayEvents: EventDetail[];
}

export interface EventVO {
    title: string;
    startTime: string;
    endTime: string;
    participants: string;
}

export default class EventList extends React.Component<EventListProps> {

    state = {
        date: new Date(),
        events: [],
    };

    onChange = (date: Date) => {
        console.error('Chosen Date ', date);
        this.setState(() => {
            return {
                date: date
            };
        });
        this.props.setDefaultDate(date);
    }

    componentDidMount() {
        const eventsReceived = this.props.todayEvents;
        const convertedEvents: { title?: string, startTime?: string, endTime?: string, participants?: string }[] = [];

        eventsReceived.map((item: EventDetail) => {
            const startTemp: string = moment(item.startTime).format('LT');
            const endTemp: string = moment(item.endTime).format('LT');
            const participantsTemp = item.eventParticipantList ? item.eventParticipantList : [];
            let participantsStr: string = '';

            participantsTemp.map((part: EventParticipant) => {
                participantsStr = participantsStr + part.emailId;
            });

            convertedEvents.push({ title: item.name, startTime: startTemp, endTime: endTemp, participants: participantsStr });
        }
        );

        this.setState(() => {
            return {
                events: convertedEvents
            };
        });
    }
    render() {
        return (
            <div className="eventListForm">
                <Calendar value={this.state.date} onChange={this.onChange} />
                <br />
                <b><p className="eventListDateTitle"> Today's Events</p></b>
                {this.state.events.map((event: EventVO, index: number) => {
                    return (
                        <div className="eventListItem" key={index}>
                            <br />
                            <div className="eventListSubjectTitle">{event.title}</div>
                            <div className="eventListTime">{event.startTime} - {event.endTime}</div>
                            <div className="eventListSubjectTitle">{event.participants}</div>
                        </div>
                    );
                })}
            </div>);
    }

    onDayClick = (selectedDate: Date) => {

        console.error(selectedDate);
    }
}
