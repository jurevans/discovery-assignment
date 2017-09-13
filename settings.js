const settings = {
    youtube: {
        /* TODO: Clear key for inclusion in Github!!! */
        API_KEY: 'AIzaSyDFQ8f9Ij1iaWqiTY04YLNJ3Swjw32SNgE',
        API_BASE_URL: 'https://www.googleapis.com/youtube/v3', // /search | /list | /delete | /update | /insert | etc...
        CHANNEL_ID: 'UCRBlbJRZo5NJyaQ4gPaVArA',
        defaultFeatureID: '6Ts9ZB3N1vw'
    },
    /**
     * Get full API URL:
     * Usage: settings.getPath('search')
     */
    getUrl: (path => `${settings.youtube.API_BASE_URL}/${path}`)
};

export default settings;