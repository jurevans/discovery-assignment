import React from 'react';
import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import axios from 'axios';

import reducer from './reducers';
import App from './components/App';

const middleware = applyMiddleware(thunk, logger, promise());
const store = createStore(reducer, middleware);

const FEATURED_VIDEO_API_URL = 'https://www.googleapis.com/youtube/v3/search';
const RELATED_VIDEOS_API_URL = 'http://rest.learncode.academy/api/wstern/users';

/*
// IF NOT USING redux-promise-middleware:

store.dispatch((dispatch) => {
    // Related Videos

    dispatch({type: 'FETCH_RELATED_VIDEOS', payload: true});

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

/** TEST */
store.dispatch({
    type: 'FETCH_FEATURED_VIDEO',
    payload: axios.get(`${FEATURED_VIDEO_API_URL}`)
});

store.dispatch({
    type: 'FETCH_RELATED_VIDEOS',
    payload: axios.get(`${RELATED_VIDEOS_API_URL}`)
});

export default store;