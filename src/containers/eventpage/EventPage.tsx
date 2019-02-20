import * as React from 'react';
import AddEvent from '../../components/addevent/AddEvent';
import EventList from '../../components/eventlist/EventList';
import BigCalendar, { stringOrDate } from 'react-big-calendar';
import * as moment from 'moment';
import './react-big-calendar.css';
import './EventPage.css';
import CreatableSelect from 'react-select/lib/Creatable';
import { EventDetail } from '../../reducers/events';
import { ActionMeta } from 'react-select/lib/types';
import Categories from './Categories';
import GalleryThumb from 'src/components/thumbnails/gallery/GalleryThumb';
import ImageOptions from './ImageOptions';

export type View = 'month' | 'week' | 'work_week' | 'day' | 'agenda';

export interface EventPageProps {
    onComponentDidMount: () => void;
    onSubmit: () => void;
    btnElement: string;
    btnType: string;
    showAddEvent: boolean;
    week: string;
    upcomingEvents: EventDetail[];
    todayEvents: EventDetail[];
}

moment.locale('en-GB');
const localizer = BigCalendar.momentLocalizer(moment);
const options: Categories[] = [
    { value: 'TCO', label: 'Cognizant Digital Lab - TCO' },
    { value: 'DGLSRZ', label: 'Digital Engineering Lab - SRZ' },
    { value: 'CDESRZ', label: 'CDE Co-Lab - SRZ' }
];

const imgOption: ImageOptions[] = [
    {
        key: 'TCO',
        value: [
            '../img/1.jpg', '../img/2.jpg', '../img/3.jpg', '../img/4.jpg', '../img/5.jpg', '../img/6.jpg', '../img/7.jpg', '../img/8.jpg'
        ]
    },
    {
        key: 'DGLSRZ',
        value: [
            '../img/srz_1.png', '../img/srz_2.png', '../img/srz_3.png', '../img/srz_4.png', '../img/srz_1.png'
        ]
    },
    {
        key: 'CDESRZ',
        value: [
            '../img/4.jpg', '../img/5.jpg', '../img/6.jpg', '../img/7.jpg', '../img/8.jpg'
        ]
    }
];

class EventPage extends React.Component<EventPageProps> {
    state = {
        hideAddEvent: false,
        showGalleryIFrame: false,
        events: [],
        defaultDate: new Date(),
        start: new Date(),
        end: new Date(),
        selectedOption: '',
        listImages: [],
    };

    convertEventObjects = () => {
        const eventsReceived = this.props.upcomingEvents;
        const convertedEvents: { title?: string, start: Date, end?: Date }[] = [];

        eventsReceived.map((item: EventDetail) => {
            const startTemp: string = item.startTime ? item.startTime : '';
            const endTemp: string = item.endTime ? item.endTime : '';
            convertedEvents.push({ title: item.name, start: new Date(startTemp), end: new Date(endTemp) });
        }
        );

        this.setState(() => {
            return {
                events: convertedEvents
            };
        });
    }

    onCancelEventClick = () => {
        this.setState(() => {
            return {
                hideAddEvent: false
            };
        });

        this.refreshEvents();
    }

    refreshEvents = () => {
        console.error('refresh events called');
        this.props.onSubmit();
        this.convertEventObjects();
    }

    onAddEventClick = () => {
        this.setState(() => {
            return {
                hideAddEvent: true
            };
        });
    }

    onUpdateBtnClick = () => {
        this.setState(() => {
            return {
                hideAddEvent: false,
                defaultDate: new Date(),
            };
        });
        let i;
        for (i = 0; i < 2; i++) {
            this.refreshEvents();
        }
    }

    setDefaultDate = (date: Date) => {
        this.setState(() => {
            return {
                defaultDate: date
            };
        });
    }
    handleLocation = (newValue: Categories, obj: ActionMeta) => {
        const convertedEvents: { title?: string, start: Date, end?: Date }[] = [];

        fetch(`https://collabsapi.apps.dev.cloudsprint.io/event`)
            .then(response1 => response1.json().then(data => {
                data.map((item: EventDetail) => {
                    convertedEvents.push({
                        title: item.name,
                        start: new Date(1550228400),
                        end: new Date(1550230200)
                    });
                });
                return data;
            }));
        this.setState(() => {
            console.error(convertedEvents);
            return {
                events: convertedEvents
            };
        });

        const selectedLocation = newValue.value;
        console.error(`Selected Value ${selectedLocation}`);
        this.setState(() => {
            return {
                selectedOption: selectedLocation
            };
        });
        for (let i = 0; i <= imgOption.length; i++) {
            const key = imgOption[i].key;
            if (key === selectedLocation) {
                this.setState((prevState, props) => ({
                    listImages: imgOption[i].value
                }));
                break;
            }
        }

        console.error(`action: ${obj.action} + ${this.state.selectedOption} + ${this.state.listImages}`);
    }

    handleSelect = (start: stringOrDate, end: stringOrDate) => {

        this.refreshEvents();

        this.setState({
            events: [
                ...this.state.events,
                {
                    start,
                    end,
                    title: ''
                },
            ],
            start,
            end
        });
    }
    onClickImage = () => {
        console.error('image clicked');
        this.setState(() => {
            return {
                showGalleryIFrame: !this.state.showGalleryIFrame
            };
        });
    }

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="eventHeader">
                        <h4>Event Calendar</h4>
                        <br />
                        <div className="col-sm-6">
                            <CreatableSelect onChange={this.handleLocation} options={options} />
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-primary" onClick={this.onAddEventClick}>
                                Add Event</button>
                        </div>
                    </div>
                </div>

                <GalleryThumb onClickImage={this.onClickImage} showView={this.state.showGalleryIFrame} listImages={this.state.listImages} />

                <div className="row">
                    <div className="col-sm-8">
                        <p>&nbsp;</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="BigCalendarContainer">
                            <BigCalendar
                                popup
                                selectable
                                localizer={localizer}
                                events={this.state.events}
                                defaultView={BigCalendar.Views.WEEK}
                                scrollToTime={new Date(1970, 1, 1, 6)}
                                defaultDate={this.state.defaultDate}
                                date={this.state.defaultDate}
                                onSelectSlot={event => { this.handleSelect(event.start, event.end); }}
                                views={['week']}
                            />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        {this.state.hideAddEvent
                            ? <AddEvent
                                onCancelClick={this.onCancelEventClick}
                                onUpdateBtnClick={this.onUpdateBtnClick}
                                startDate={this.state.start}
                                endDate={this.state.end}
                                defaultDate={this.state.defaultDate}
                                location={this.state.selectedOption}
                            />
                            : <EventList setDefaultDate={this.setDefaultDate} todayEvents={this.props.todayEvents} />}
                    </div>
                </div>
            </div>
        );
    }

    /* componentWillReceiveProps() {
         this.props.onComponentDidMount();
     } */
    componentWillMount() {
        //    const url: string = window.location.href;
        this.props.onComponentDidMount();
        this.convertEventObjects();

    }
}
export default EventPage;
