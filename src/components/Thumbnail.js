import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({imageUrl, title, id, handleClick}) => {
    return (
        <div
            className="thumbnail"
            onClick={() => {
                handleClick.call(this, id)
            }}
        >
            <img src={imageUrl} alt={title} />
            <span>
                {title.length > 30
                    ? `${title.substring(0, 30)}...`
                    : title}
            </span>
        </div>
    )
};

Thumbnail.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Thumbnail;