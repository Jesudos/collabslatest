import * as React from 'react';
import EventThumb from '../thumbnails/events/EventThumb';
// import EventThumb from '../thumbnails/events/EventThumb';
import UpcomingEvent from './UpcomingEventVO';

export interface BlogSectionProps {
    title: string;
    notes: string;
    listItems: UpcomingEvent[];
    clickEvt: () => void;
} 

export const BlogSection: React.StatelessComponent<BlogSectionProps> = (props) => {
 
    return (
        <div id="blogs" className="section">
            <div className="container">
                <div className="row">
                    <p className="section-header-text">{props.title}</p>
                    <p className="section-content">{props.notes}</p>
                    <p>&nbsp;</p>
                </div>
                <div id="blogs-wrapper">
                    <div className="row">
                        {props.listItems.map((item: UpcomingEvent, index: number) =>
                            <div key={index} className="col-sm-4">
                                <EventThumb
                                    cardDate={item.date}
                                    cardImage={item.imagePath}
                                    cardText={item.desc}
                                    cardTitle={item.title}
                                    clickEvt={props.clickEvt}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
