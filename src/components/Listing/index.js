import React from 'react';
import PropTypes from 'prop-types';

const MyButton = (title, callback, id) => {
    if ((typeof callback ==='function')){
        return (
             <button onClick={() => callback(id)}>{title}</button>
             );
        }
};

const Listing = (props) => {
    const { items, customClass, noItemsMessage, OnItemDone, OnItemRemove, OnItemUndo } = props;
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
                        <li key={i}>
                            {MyButton ('Done', OnItemDone, item.id)}
                            {MyButton ('Remove', OnItemRemove, item.id)}
                            {MyButton ('Undo', OnItemUndo, item.id)}
                            {item.label}
                        </li>
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
    OnItemDone: PropTypes.func,
    OnItemRemove: PropTypes.func,
    OnItemUndo: PropTypes.func,
};

export default Listing;
