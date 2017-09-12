import { combineReducers } from 'redux'

import FeaturedVideoReducer from './FeaturedVideo';
import RelatedVideosReducer from './RelatedVideos';

export default combineReducers({
    featuredVideo: FeaturedVideoReducer,
    relatedVideos: RelatedVideosReducer
});
