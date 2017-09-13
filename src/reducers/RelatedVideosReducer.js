/**
 * RelatedVideosReducer
 */

const initialState = {
    loading: false,
    loaded: false,
    videos: [],
    error: null
};

const RelatedVideosReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_RELATED_VIDEOS': {
            state = {
                ...state,
                loading: true,
                loaded: false,
                videos: [],
                error: null
            };
            break;
        }

        case 'FETCH_RELATED_VIDEOS_FULFILLED': {
            state = {
                ...state,
                loading: false,
                loaded: true,
                videos: action.payload.data.items,
                error: null
            };
            break;
        }

        case 'FETCH_RELATED_VIDEOS_REJECTED': {
            state = {
                ...state,
                loading: false,
                loaded: false,
                videos: [],
                error: action.payload
            };
            break;
        }
    }

    return state;
};

export default RelatedVideosReducer;