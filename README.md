# Discovery Assignment

This is a landing page showcasing a video via the YouTube Data API.

## Run

To install dependencies, as well as launch `webpack-dev-server`:

```
yarn install
yarn start
```

Or, if using `npm`:

```
npm install
npm start
```

If developing, use `--watch` to automatically reload on file change.

```
yarn start --watch
```

## Build

To build the development version (i.e., output static files):

```
yarn build
```

The project will be built to the `./build` directory.

## TODOS

### Intitial View

The initial state of the landing page should include one featured video,
with 10 additional videos of varying categories. The present project is of
a "featured" video, and 10 related videos. Also, the additional videos should
be filterable by selecting a category from a drop-down. This is not currently 
implemented.

The initial view as of right now is the view the user would see upon 
selecting selecting one of the 10 additional videos. The "Related Videos" React
component needs to be updated to not initially dispatch the `FETCH_RELATED_VIDEOS`
action, and instead wait for the appropriate action to be dispatched
to initiate the transaction. More explicitly, when a new "featured" video
is selected, the `id` of that featured video will be used in the request
to the YouTube Data API.

It may make sense to have a container for the landing page (containing `FeaturedVideo` 
and, for example, `AdditionalVideos`), and an additional container containing the 
`FeaturedVideo` and `RelatedVideos` components. `react-router` could also be set up
with Redux to access these two containers. 

The `FeaturedVideo` and `RelatedVideos` components are set up minimally to handle error messages.
This needs to be more robust, and I had intended to create a dumb component which receives an error
response and displays the message elegantly (Axios can return data along with it's error response,
and this could be handled better).

### YouTube Data API

Currently, the YouTube Data API is being accessed to:

* `GET` a video by ID (e.g., `https://www.googleapis.com/youtube/v3/videos`)
* `GET` search results related to ID (e.g., `https://www.googleapis.com/youtube/v3/search`)

Additional requests need to be added to return search results by category, so this can be narrowed down.
We first need to get a list of categories from the API, then allow the user to filter the results on the
initial landing page.

## Tech specs

This project is build using the following specs:

* React
* Redux
    * Redux Promise Middleware (`redux-promise-middleware`) which automatically 
    dispatches `_FULFILLED` and `_REJECTED` for promises, and cleans things up a bit.
* Webpack 3
* Webpack-Dev-Server
* Axios (promise-based Ajax)
* Sass
* Babel (`es2017`, `stage-0`, `react`, see `.babelrc`)

## Layout TODOS

In our Sass/SCSS code, we need to make better use of `flex-box` (preferably in `mixins/_layout.scss`)
as well as architect *DRY* Sass code in our partials. According to our `webpack.config.js` file,
we are set up with `main.scss` as an entry point, however, if we so choose, we can include SCSS files
in our React component for "one-off" cases where we aren't reusing anything.