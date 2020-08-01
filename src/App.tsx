import React, {Component} from 'react';
import { withTranslate } from 'react-redux-multilingual'
import MyChatBot from "./chatbot/MyChatBot.js";
// Custom Components
import HeaderOne from './common/headers/header-one';
import FooterTwo from "./common/footers/footer-two";

// ThemeSettings
// import ThemeSettings from "./common/theme-settings"

class App extends Component {
    render() {
        return (
            <div>
                <MyChatBot/>
                <HeaderOne logoName={'logo.png'}/>
                {this.props.children}
                <FooterTwo logoName={'logo.png'}/>
                {/*<ThemeSettings />*/}
            </div>
        );
    }
}

export default withTranslate(App);