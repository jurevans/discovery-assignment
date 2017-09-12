import axios from 'axios';

import settings from '../../settings';

const RELATED_VIDEOS_API_URL = settings.getUrl('search');
const FEATURED_VIDEO_API_URL = settings.getUrl('videos');

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
                relatedToVideoId: settings.youtube.defaultFeatureID,
                type: 'video',
                maxResults: 11 /** Why is this? I have to +1 to get 10 results :/ */
            }
        })
    };
}

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
};