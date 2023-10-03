import { render, screen } from '@testing-library/react';
import Box from './Box';

it('renders without crashing', function () {
    render(
        <Box
            width="100"
            height="100"
            backgroundColor="#FF0000"
            id="test-id"
            deleteBox={() => {}}
        />
    );
});

it('matches snapshot', function () {
    const { asFragment } = render(
        <Box
            width="100"
            height="100"
            backgroundColor="#FF0000"
            id="test-id"
            deleteBox={() => {}}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});
