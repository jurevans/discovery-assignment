import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as RelatedVideosActions from '../actions/RelatedVideosActions';

import Thumbnail from './Thumbnail';

const mapStateToProps = function(state) {
    return {
        featuredVideo: state.featuredVideo, /* Is loaded? Pull data to fetch related videos from this */
        loading: state.relatedVideos.loading,
        loaded: state.relatedVideos.loaded,
        videos: state.relatedVideos.videos,
        error: state.relatedVideos.error,
    }
};

const mapDispatchToProps = function (dispatch) {
    const boundActionCreators = bindActionCreators(RelatedVideosActions, dispatch);

    return {...boundActionCreators, dispatch};
};

class RelatedVideos extends Component {

    componentWillMount() {
        /** TODO: Should dispatch when FeaturedVideo has been fulfilled */
        this.props.dispatch(RelatedVideosActions.fetchRelatedVideos());
    }

    setFeaturedVideo(id) {
        this.props.dispatch(RelatedVideosActions.fetchFeaturedVideo(id));
    }

    render() {
        return (
            <div className="related-videos">
                <h2>Related Videos</h2>
                {this.props.videos.map((item, i) =>
                    <Thumbnail
                        key={i}
                        imageUrl={item.snippet.thumbnails.default.url || ''}
                        title={item.snippet.title || ''}
                        id={item.id.videoId}
                        handleClick={this.setFeaturedVideo.bind(this)}
                    />
                )}
            </div>
        );
    }
}

RelatedVideos.propTypes = {
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    video: PropTypes.object,
    error: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedVideos);