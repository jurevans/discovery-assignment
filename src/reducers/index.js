import { combineReducers } from 'redux'

import FeaturedVideoReducer from './FeaturedVideoReducer';
import RelatedVideosReducer from './RelatedVideosReducer';

export default combineReducers({
    featuredVideo: FeaturedVideoReducer,
    relatedVideos: RelatedVideosReducer
});
