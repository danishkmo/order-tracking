import React from 'react';
import { render, screen } from '@testing-library/react';
import { ActionToolbar } from '../components';

const props = {
    selectedType:"",
    setSelectedType: jest.fn(),
    searchText: "",
    setSearchText: jest.fn(),
    rowSelectionModel: [],
    handleDeleteTrackingOrder: jest.fn(),
    setOpen: jest.fn(),
}

test('ActionToolbar', () => {
    const dataTable = render(<ActionToolbar {...props} />);
    expect(dataTable).toBeDefined();
});


test('ActionToolbar -> Verify Button Text', () => {
    render(<ActionToolbar  {...props}  />);
    const createOrderBtn = screen.getByText(/Create Order/i);
    expect(createOrderBtn).toBeInTheDocument();
    const deleteSelectedBtn = screen.getByText(/Delete Selected/i);
    expect(deleteSelectedBtn).toBeInTheDocument();
});
