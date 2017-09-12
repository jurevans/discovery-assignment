import React from 'react';
import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const middleware = applyMiddleware(thunk, logger, promise());
const store = createStore(reducer, middleware);

/*
// IF NOT USING redux-promise-middleware, do something like:

store.dispatch((dispatch) => {
    // Related Videos

    dispatch({type: 'FETCH_RELATED_VIDEOS'});

    axios.get(`${BASE_API_URL}`)
        .then((response) => {
            dispatch({
                type: 'FETCH_RELATED_VIDEOS_FULFILLED',
                payload: response.data
            });
        })
        .catch((error) => {
            dispatch({
                type: 'FETCH_RELATED_VIDEOS_REJECTED',
                payload: error
            });
        })
});
*/

/** TEST DISPATCH */
/*
store.dispatch({
    type: 'FETCH_FEATURED_VIDEO',
    payload: axios.get(`${FEATURED_VIDEO_API_URL}`)
});

store.dispatch({
    type: 'FETCH_RELATED_VIDEOS',
    payload: axios.get(`${RELATED_VIDEOS_API_URL}`)
});
*/
export default store;