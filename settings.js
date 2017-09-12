const settings = {
    youtube: {
        API_KEY: 'AIzaSyDFQ8f9Ij1iaWqiTY04YLNJ3Swjw32SNgE',
        CHANNEL_ID: 'UCRBlbJRZo5NJyaQ4gPaVArA',
        API_BASE_URL: 'https://www.googleapis.com/youtube/v3', // /search | /list | /delete | /update | /insert | etc...
        defaultFeatureID: '6Ts9ZB3N1vw'
    },
    getUrl: (path => `${settings.youtube.API_BASE_URL}/${path}`)
};

export default settings;