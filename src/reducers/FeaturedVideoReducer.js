/**
 * FeaturedVideoReducer
 */

import settings from '../../settings';

const initialState = {
    loading: false,
    loaded: false,
    videoId: settings.youtube.defaultFeatureID,
    video: null,
    error: null
};

const FeaturedVideoReducer = (state=initialState, action) => {

    switch(action.type) {

        case 'FETCH_FEATURED_VIDEO': {
            state = {
                ...state,
                loading: true,
                loaded: false,
                video: null,
                error: null
            };

            break;
        }

        case 'FETCH_FEATURED_VIDEO_FULFILLED': {
            state = {
                ...state,
                loading: false,
                loaded: true,
                video: action.payload.data,
                videoId: action.payload.data.items[0].id,
                error: null
            };

            break;
        }

        case 'FETCH_FEATURED_VIDEO_REJECTED': {
            state = {
                ...state,
                loading: false,
                loaded: false,
                video: null,
                error: action.payload
            };

            break;
        }
    }

    return state;
};

export default FeaturedVideoReducer;