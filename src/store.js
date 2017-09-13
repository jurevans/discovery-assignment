import React from 'react';
import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const middleware = applyMiddleware(logger, promise());
const store = createStore(reducer, middleware);

/*
// IF NOT USING redux-promise-middleware, dispatch like so:

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

export default store;