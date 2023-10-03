import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it('renders without crashing', function () {
    render(<TodoList />);
});

it('matches snapshot', function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it('can add a new box', function () {
    const { getByLabelText, queryByText, getByText, toHaveStyle } = render(
        <TodoList />
    );

    // check there's no Delete button
    expect(queryByText('X')).not.toBeInTheDocument();

    const taskInput = getByLabelText('Task:');
    const submitBtn = getByText('Add');

    // fill out the form
    fireEvent.change(taskInput, { target: { value: 'A Task' } });
    fireEvent.click(submitBtn);

    // box exists
    const deleteBtn = queryByText('X');
    expect(deleteBtn).toBeInTheDocument();
});

it('can delete a box', function () {
    const { getByLabelText, getByText, queryByText } = render(<TodoList />);

    const taskInput = getByLabelText('Task:');
    const submitBtn = getByText('Add');

    // fill out the form
    fireEvent.change(taskInput, { target: { value: 'A Task' } });
    fireEvent.click(submitBtn);

    // box exists
    const deleteBtn = getByText('X');
    expect(deleteBtn).toBeInTheDocument();

    // delete the box
    fireEvent.click(deleteBtn);

    // box is gone!
    expect(queryByText('X')).not.toBeInTheDocument();
});
