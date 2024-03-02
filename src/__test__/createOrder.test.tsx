import React from 'react';
import { render, screen } from '@testing-library/react';
import { CreateOrderModal } from '../components';


test('CreateOrderModal', () => {
    const dataTable = render(<CreateOrderModal open={true} setOpen={jest.fn()} handleCreateOrder={jest.fn()} />);
    expect(dataTable).toBeDefined();
});


test('CreateOrderModal -> Verify Modal Title', () => {
    render(<CreateOrderModal open={true} setOpen={jest.fn()} handleCreateOrder={jest.fn()}   />);
    const createDateCols = screen.getByText(/Create Tracking Order/i);
    expect(createDateCols).toBeInTheDocument();
});
