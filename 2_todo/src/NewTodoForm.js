import React, { useState } from 'react';

/** Form for creating a new item to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        task: '',
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    /** Send {width, height, backgroundColor} to parent
     *    & clear form. */

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo(formData);
        setFormData(INITIAL_STATE);
    };

    /** Update local state w/curr state of input elem */

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    };

    /** render form */

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task:</label>
            <input
                type="text"
                id="task"
                name="task"
                value={formData.task}
                onChange={handleChange}
            />

            <button>Add a new task!</button>
        </form>
    );
};

export default NewTodoForm;
