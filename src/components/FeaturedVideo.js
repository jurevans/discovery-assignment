import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as FeaturedVideoActions from '../actions/FeaturedVideoActions';

import Video from './Video';

const mapStateToProps = function(state) {
    return {
        loading: state.featuredVideo.loading,
        loaded: state.featuredVideo.loaded,
        video: state.featuredVideo.video,
        videoId: state.featuredVideo.videoId,
        error: state.featuredVideo.error,
    }
};

const mapDispatchToProps = function (dispatch) {
    const boundActionCreators = bindActionCreators(FeaturedVideoActions, dispatch);

    return {...boundActionCreators, dispatch};
};

class FeaturedVideo extends Component {

    componentWillMount() {
        this.props.dispatch(FeaturedVideoActions.fetchFeaturedVideo(this.props.videoId));
    }

    render() {
        const video = this.props.video ? this.props.video.items[0] : null;

        return (
            <div>
                <h2>Featured Video</h2>
                {video &&
                    <Video
                        id={video.id}
                        title={video.snippet.title}
                        description={video.snippet.description}
                    />
                }
            </div>
        );
    }
}

FeaturedVideo.propTypes = {
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    video: PropTypes.object,
    error: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedVideo);


