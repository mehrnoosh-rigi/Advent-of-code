import React from 'react';
import PropTypes from 'prop-types';

const Listing = (props) => {
    const { items, customClass, noItemsMessage, onItemClick } = props;

    return (
        <div className={'row listing ' + customClass}>
            {
                items.length === 0 &&
                <div className="no-items">{noItemsMessage}</div>
            }
            {
                items.length > 0 &&
                <ul className="col-xs-12">
                    {items.map((item, i) => (
                        <li key={i}
                            onClick={() => (typeof onItemClick === 'function') ? onItemClick(item.id) : false}
                        >{item.label}</li>
                    ))}
                </ul>
            }
        </div>
    );
};

Listing.propTypes = {
    items: PropTypes.array.isRequired,
    customClass: PropTypes.string.isRequired,
    noItemsMessage: PropTypes.string,
    onItemClick: PropTypes.func
};

export default Listing;
