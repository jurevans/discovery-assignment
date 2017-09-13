import React from 'react';
import { Component } from 'react';

import FeaturedVideo from './FeaturedVideo';
import RelatedVideos from './RelatedVideos';


export default class App extends Component {

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Discovery Assignment</h1>
                </div>
                <div>
                    <FeaturedVideo/>
                    <RelatedVideos/>
                </div>
            </div>
        );
    }
}
