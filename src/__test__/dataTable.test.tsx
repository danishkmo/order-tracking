import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataTable } from '../components';

//({ columns, data, rowSelectionModel, setRowSelectionModel}: IDataTable): JSX.Element => 

const Cols = [
    { field: 'id', headerName: 'Order ID', width: 300, sortable: false },
    { field: 'createdDate', headerName: 'Creation Date', width: 230, sortable: false },
    { field: 'createdByUserName', headerName: 'Created By', width: 130, sortable: false }
]

test('DataTable', () => {
    const dataTable = render(<DataTable columns={Cols} data={[]} rowSelectionModel={[]} setRowSelectionModel={jest.fn()} />);
    expect(dataTable).toBeDefined();
});


test('DataTable -> Verify Cols Rendering', () => {
    render(<DataTable columns={Cols} data={[]} rowSelectionModel={[]} setRowSelectionModel={jest.fn()} />);
    const createDateCols = screen.getByText(/Creation Date/i);
    expect(createDateCols).toBeInTheDocument();
    const orderIdCols = screen.getByText(/Order ID/i);
    expect(orderIdCols).toBeInTheDocument();
});

