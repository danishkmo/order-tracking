import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Order ID', width: 300, sortable: false },
    { field: 'createdDate', headerName: 'Creation Date', width: 230, sortable: false },
    { field: 'createdByUserName', headerName: 'Created By', width: 130, sortable: false },
    {
        field: 'orderType',
        headerName: 'Order Type',
        width: 190,
        sortable: false,
    },
    {
        field: 'customerName',
        headerName: 'Customer',
        sortable: false,
        width: 160
    },
    {
        field: 'action',
        headerName: '',
        sortable: false,
        width: 160,
        // renderCell: () => (
        //     <IconButton>
        //         <EditIcon fontSize="small" />
        //     </IconButton>
        // )
    },
];

export {
    columns
}