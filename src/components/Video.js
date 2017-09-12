import React from 'react';
import YouTube from 'react-youtube';

import PropTypes from 'prop-types';

const Video = ({id, title, description}) => {
    return (
        <div>
            <h3>{title}</h3>
            <YouTube videoId={id} />
            <p>
                {description.split('\n')[0]}
            </p>
        </div>
    )
};

Video.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Video;