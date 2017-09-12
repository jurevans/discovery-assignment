import React from 'react';
import { Component } from 'react';

import './App.scss';

import FeaturedVideo from './FeaturedVideo';
import RelatedVideos from './RelatedVideos';

export default class App extends Component {

    render() {
        return (
            <div>
                <h1>Discovery Assignment</h1>
                <div className="error">

                </div>
                <FeaturedVideo/>
                <RelatedVideos/>
            </div>
        );
    }
}
