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

    return (
        <div id="upevents" className="section">
            <div className="container">
                <div className="row">
                    <p className="section-header-text">{props.title}</p>
                    <p className="section-content">{props.notes}</p>
                    <p>&nbsp;</p>
                </div>
                { (props.listItems.length === 0) && 
                        <InfoAlert message="No upcoming events found"/>
                }
                 { (props.listItems.length > 0) && (props.listItems.length <= 3) &&
                        <div className="row">
                        {props.listItems.map((item: EventDetail, index: number) => 
                            <div key={index} className="col-sm-4">
                                <EventThumb
                                    cardDate={item.endDate}
                                    cardImage="../img/1.jpg"
                                    cardText={item.notes}
                                    cardTitle={item.name}
                                    clickEvt={props.clickEvt}
                                />
                            </div>
                            )
                        }
                        </div>
                 }
                 { (props.listItems.length > 3) &&
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"/>
                        <li data-target="#demo" data-slide-to="1"/>
                        { (props.listItems.length > 6) &&
                        <li data-target="#demo" data-slide-to="2"/>
                        }
                    </ol>
                    <div className="carousel-inner">                    
                        <div className="item active">
                            <div className="col-sm-4">
                                <EventThumb
                                    cardDate={props.listItems[0].startDate}
                                    cardImage="../img/1.jpg"
                                    cardText={props.listItems[0].notes}
                                    cardTitle={props.listItems[0].name}
                                    clickEvt={props.clickEvt}
                                />
                            </div>
                            <div className="col-sm-4">
                                <EventThumb
                                    cardDate={props.listItems[1].startDate}
                                    cardImage="../img/2.jpg"
                                    cardText={props.listItems[1].notes}
                                    cardTitle={props.listItems[1].name}
                                    clickEvt={props.clickEvt}
                                />
                            </div>
                            <div className="col-sm-4">
                                <EventThumb
                                    cardDate={props.listItems[2].startDate}
                                    cardImage="../img/3.jpg"
                                    cardText={props.listItems[2].notes}
                                    cardTitle={props.listItems[2].name}
                                    clickEvt={props.clickEvt}
                                />
                            </div>  
                        </div>   
                        <div className="item">
                            <div className="col-sm-4">
                                <EventThumb
                                    cardDate={props.listItems[3].startDate} 
                                    cardImage="../img/4.jpg"
                                    cardText={props.listItems[3].notes}
                                    cardTitle={props.listItems[3].name}
                                    clickEvt={props.clickEvt}
                                />
                            </div>
                            {(props.listItems[4] !== undefined && props.listItems[4] !== 'undefined') && 
                                <div className="col-sm-4">                              
                                    <EventThumb
                                        cardDate={props.listItems[4].startDate}
                                        cardImage="../img/5.jpg"
                                        cardText={props.listItems[4].notes}
                                        cardTitle={props.listItems[4].name}
                                        clickEvt={props.clickEvt}
                                    />
                                </div>
                            }
                            {(props.listItems[5] !== undefined && props.listItems[5] !== 'undefined') &&                             
                            <div className="col-sm-4">
                                <EventThumb
                                    cardDate={props.listItems[5].startDate}
                                    cardImage="../img/9.jpg"
                                    cardText={props.listItems[5].notes}
                                    cardTitle={props.listItems[5].name}
                                    clickEvt={props.clickEvt}
                                />
                            </div>  
                            }
                        </div>   
                        { (props.listItems.length > 6) &&
                        <div className="item">
                        {(props.listItems[6] !== undefined && props.listItems[6] !== 'undefined') && 
                            <div className="col-sm-4">
                                <EventThumb
                                    cardDate={props.listItems[6].startDate}
                                    cardImage="../img/6.jpg"
                                    cardText={props.listItems[6].notes}
                                    cardTitle={props.listItems[6].name}
                                    clickEvt={props.clickEvt}
                                />
                            </div>
                        }
                        {(props.listItems[7] !== undefined && props.listItems[7] !== 'undefined') && 
                            <div className="col-sm-4">
                                <EventThumb
                                    cardDate={props.listItems[7].startDate}
                                    cardImage="../img/7.jpg"
                                    cardText={props.listItems[7].notes}
                                    cardTitle={props.listItems[7].name}
                                    clickEvt={props.clickEvt}
                                />
                            </div>
                        }
                        {(props.listItems[8] !== undefined && props.listItems[8] !== 'undefined') && 
                            <div className="col-sm-4">
                                <EventThumb
                                    cardDate={props.listItems[8].startDate}
                                    cardImage="../img/8.png"
                                    cardText={props.listItems[8].notes}
                                    cardTitle={props.listItems[8].name}
                                    clickEvt={props.clickEvt}
                                />
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
