import * as React from 'react';
import BookEventHeader from '../../components/sections/BookEventHeader';
import UpcomingEvents from '../../components/sections/UpcomingEvents';
import UpcomingEvent from '../../components/sections/UpcomingEventVO';
import BlogSection from '../../components/sections/BlogSection';
import { EventDetail } from '../../reducers/events';
export interface LandingPageProps {
    onComponentDidMount: () => void;
    onSubmit: () => void;
    bookEvent: () => void;
    btnElement: string;
    btnType: string;
    upcomingEvents: EventDetail[];
    blogEvents: UpcomingEvent[];
} 

class LandingPage extends React.Component<LandingPageProps> {
    render() {
        return (
            <div className="container">
                <BookEventHeader
                    btnElement="Book Event"
                    btnType="book"
                    clickEvt={this.props.bookEvent}
                />
                <UpcomingEvents
                    title="Upcoming Events"
                    listItems={this.props.upcomingEvents}
                    notes="Explore the upcoming events happening in all our Cognizant Labs locations"
                    clickEvt={this.props.onSubmit}
                />

                <BlogSection
                    title="Blogs"
                    listItems={this.props.blogEvents}
                    notes="Summary of the blog posts shared by attendees featuring the past successful events in our Cognizant Labs locations."
                    clickEvt={this.props.onSubmit}
                />

                <BlogSection
                    title="Testimonials"
                    listItems={this.props.blogEvents}
                    notes="Summary of the blog posts shared by attendees featuring the past successful events in our Cognizant Labs locations."
                    clickEvt={this.props.onSubmit}
                />

            </div>
        );
    }    
    
    componentWillMount() {
    //    const url: string = window.location.href;
       this.props.onComponentDidMount();

    }
}

export default LandingPage;
