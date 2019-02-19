import * as React from 'react';
import EventThumb from '../thumbnails/events/EventThumb';
// import EventThumb from '../thumbnails/events/EventThumb';
import { EventDetail } from '../../reducers/events';
import InfoAlert from '../utils/InfoAlert';

export interface UpcomingEventsProps {
    title: string;
    notes: string;
    listItems: EventDetail[];
    clickEvt: () => void;
}

export const UpcomingEvents: React.StatelessComponent<UpcomingEventsProps> = (props) => {

    const envetThumb = (item: EventDetail, imageurl: string) => {
        return (
            <EventThumb
                cardDate={item.endDate}
                cardImage={imageurl}
                cardText={item.notes}
                cardTitle={item.name}
                clickEvt={props.clickEvt}
            />
        );
    };

    return (
        <div id="upevents" className="section">
            <div className="container">
                <div className="row">
                    <p className="section-header-text">{props.title}</p>
                    <p className="section-content">{props.notes}</p>
                    <p>&nbsp;</p>
                </div>
                {(props.listItems.length === 0) &&
                    <InfoAlert message="No upcoming events found" />
                }

                {(props.listItems.length > 0) && (props.listItems.length <= 3) &&
                    <div className="row">
                        {props.listItems.map((item: EventDetail, index: number) =>
                            <div key={index} className="col-sm-4">
                                {envetThumb(item, '../img/1.jpg')}
                            </div>
                        )}
                    </div>
                }
                {(props.listItems.length > 3) &&
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active" />
                            <li data-target="#demo" data-slide-to="1" />
                            {(props.listItems.length > 6) &&
                                <li data-target="#demo" data-slide-to="2" />
                            }
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <div className="col-sm-4">{envetThumb(props.listItems[0], '../img/1.jpg')}</div>
                                <div className="col-sm-4">{envetThumb(props.listItems[1], '../img/2.jpg')}</div>
                                <div className="col-sm-4">{envetThumb(props.listItems[2], '../img/3.jpg')}</div>
                            </div>
                            <div className="item">
                                <div className="col-sm-4">
                                    {envetThumb(props.listItems[3], '../img/4.jpg')}
                                </div>
                                {(props.listItems[4] !== undefined && props.listItems[4] !== 'undefined') &&
                                    <div className="col-sm-4">
                                        {envetThumb(props.listItems[4], '../img/5.jpg')}
                                    </div>
                                }
                                {(props.listItems[5] !== undefined && props.listItems[5] !== 'undefined') &&
                                    <div className="col-sm-4">
                                        {envetThumb(props.listItems[5], '../img/9.jpg')}

                                    </div>
                                }
                            </div>
                            {(props.listItems.length > 6) &&
                                <div className="item">
                                    {(props.listItems[6] !== undefined && props.listItems[6] !== 'undefined') &&
                                        <div className="col-sm-4">
                                            {envetThumb(props.listItems[6], '../img/6.jpg')}
                                        </div>
                                    }
                                    {(props.listItems[7] !== undefined && props.listItems[7] !== 'undefined') &&
                                        <div className="col-sm-4">
                                            {envetThumb(props.listItems[7], '../img/7.jpg')}
                                        </div>
                                    }
                                    {(props.listItems[8] !== undefined && props.listItems[8] !== 'undefined') &&
                                        <div className="col-sm-4">
                                            {envetThumb(props.listItems[8], '../img/8.jpg')}
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};
export default UpcomingEvents;
