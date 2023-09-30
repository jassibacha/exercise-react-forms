import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', function () {
    render(<BoxList />);
});

it('matches snapshot', function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it('can add a new box', function () {
    const { getByLabelText, queryByText, getByText, toHaveStyle } = render(
        <BoxList />
    );

    // check there's no Delete button
    expect(queryByText('X')).not.toBeInTheDocument();

    const widthInput = getByLabelText('Width:');
    const heightInput = getByLabelText('Height:');
    const bgColorInput = getByLabelText('Background Color:');
    const submitBtn = getByText('Add a new box!');

    // fill out the form
    fireEvent.change(widthInput, { target: { value: '100' } });
    fireEvent.change(heightInput, { target: { value: '150' } });
    fireEvent.change(bgColorInput, { target: { value: '#FF0000' } });
    fireEvent.click(submitBtn);

    // box exists
    const deleteBtn = queryByText('X');
    expect(deleteBtn).toBeInTheDocument();
    // check if the box has the correct background color
    expect(deleteBtn.parentElement).toHaveStyle('background-color: #FF0000');
});

it('can delete a box', function () {
    const { getByLabelText, getByText, queryByText } = render(<BoxList />);

    const widthInput = getByLabelText('Width:');
    const heightInput = getByLabelText('Height:');
    const bgColorInput = getByLabelText('Background Color:');
    const submitBtn = getByText('Add a new box!');

    // fill out the form
    fireEvent.change(widthInput, { target: { value: '100' } });
    fireEvent.change(heightInput, { target: { value: '150' } });
    fireEvent.change(bgColorInput, { target: { value: '#FF0000' } });
    fireEvent.click(submitBtn);

    // box exists
    const deleteBtn = getByText('X');
    expect(deleteBtn).toBeInTheDocument();

    // delete the box
    fireEvent.click(deleteBtn);

    // box is gone!
    expect(queryByText('X')).not.toBeInTheDocument();
});
