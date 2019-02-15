import * as React from 'react';
import { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import { Redirect, Switch } from 'react-router';
import LandingPageContainer from './containers/landingPage/LandingPageContainer';
import LoginPage from './containers/loginpage/LoginPageContainer';
import EventPageContainer from './containers/eventpage/EventPageContainer';
import PcfFormPageContainer from './containers/pcfonboardingPage/PcfFormPageContainer';

class AppRouter extends React.Component {
    render(): ReactNode {
        return (
            <div>
                <Switch>
                    <Route exact path="/about" component={LandingPageContainer} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/event" component={EventPageContainer} />
                    <Route exact path="/feedback" component={EventPageContainer} />
                    <Route exact path="/dashboard" component={EventPageContainer} />
                    <Route exact path="/users" component={EventPageContainer} />
                    <Route exact path="/pcfform" component={PcfFormPageContainer} />
                    <Redirect exact from="/" to="/about" />
                    <Redirect to="/error" />
                </Switch>
            </div>
        );
    }
}

export default AppRouter;
