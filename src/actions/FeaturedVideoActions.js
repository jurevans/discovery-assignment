import axios from 'axios';

import settings from '../../settings';

const FEATURED_VIDEO_API_URL = settings.getUrl('videos');

/**
 * fetchFeaturedVideo
 * @returns {{type: string, payload: *}}
 */
export function fetchFeaturedVideo(id) {
    return {
        type: 'FETCH_FEATURED_VIDEO',
        payload: axios.get(FEATURED_VIDEO_API_URL, {
            params: {
                key: settings.youtube.API_KEY,
                id: id,
                part: 'snippet',
            }
        })
    }
}
