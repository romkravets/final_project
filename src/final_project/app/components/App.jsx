import * as React from 'react';
import { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import { HeaderComponent } from './HeaderComponent/HeaderComponent.jsx';
import { MainComponent } from './MainComponent/MainComponent.jsx';
import { FooterComponent } from './FooterComponent/FooterComponent.jsx';
import { SectionTitleComponent } from './SectionTitleComponent/SectionTitleComponent.jsx';
import { ShoppingSectionComponent } from './ShoppingSectionComponent/ShoppingSectionComponent.jsx';
import { HeaderComponentTwo } from './HeaderComponentTwo/HeaderComponentTwo.jsx';

export class App extends Component {
    render() {
        return  (
            <Router>
                <div className="page-container">
                    <HeaderComponent />
                    <MainComponent />
                    <ShoppingSectionComponent />
                    <HeaderComponentTwo />
                    <FooterComponent />
                </div>
            </Router>
        );
    }
}