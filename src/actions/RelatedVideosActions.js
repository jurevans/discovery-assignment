import axios from 'axios';

import settings from '../../settings';

const RELATED_VIDEOS_API_URL = settings.getUrl('search');

/**
 * fetchRelatedVideos
 * @returns {{type: string, payload: *}}
 */
export function fetchRelatedVideos(featuredVideo) {
    return {
        type: 'FETCH_RELATED_VIDEOS',
        payload: axios.get(RELATED_VIDEOS_API_URL, {
            params: {
                key: settings.youtube.API_KEY,
                part: 'snippet',
                relatedToVideoId: featuredVideo,
                type: 'video',
                maxResults: 11 /** Why is this? I have to +1 to get 10 results :/ */
            }
        })
    };
}
