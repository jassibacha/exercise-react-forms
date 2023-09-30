import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuid } from 'uuid';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const renderBoxes = () => {
        return (
            <div>
                {boxes.map((box) => (
                    <Box
                        width={box.width}
                        height={box.height}
                        backgroundColor={box.backgroundColor}
                        id={box.id}
                        key={box.id}
                        deleteBox={() => deleteBox(box.id)}
                    />
                ))}
            </div>
        );
    };

    const deleteBox = (boxId) => {
        // Run setBoxes again
        setBoxes((boxes) =>
            // Filter the boxes array from state
            boxes.filter((box) => {
                // If the ID matches, remove it!
                return box.id !== boxId;
            })
        );
    };

    /** Add new item object to cart. */
    const addBox = (box) => {
        let newBox = { ...box, id: uuid() };
        setBoxes((boxes) => [...boxes, newBox]);
    };

    return (
        <div className="Boxes">
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    );
};

export default BoxList;
