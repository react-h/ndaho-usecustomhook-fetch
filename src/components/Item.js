import React from 'react';

const Item = (props) => {
    return (
        <div className="card col-4" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Author: {props.author}</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href={props.url} className="card-link">Visit For detail </a>
            </div>
        </div>

    )
};

export default Item;