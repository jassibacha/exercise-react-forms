import React from 'react';
import './Box.css';

const Box = ({ width, height, backgroundColor, id, deleteBox }) => {
    return (
        <div
            className="Box"
            style={{
                width: width + 'px',
                height: height + 'px',
                backgroundColor: backgroundColor,
            }}
            key={id}
        >
            <button className="delete" onClick={deleteBox}>
                X
            </button>
        </div>
    );
};

export default Box;
