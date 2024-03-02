import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IOrderData } from "../../interface";
import "./style.css";


interface IDataTable {
  columns: GridColDef[],
  data: IOrderData[],
  rowSelectionModel: Array<string>;
  setRowSelectionModel: (val: any) => void;
}

const DataTable = ({ columns, data, rowSelectionModel, setRowSelectionModel }: IDataTable): JSX.Element => {
  return (
    <DataGrid
      rows={data}
      columns={columns}
      onRowSelectionModelChange={(newRowSelectionModel: any) => {
        setRowSelectionModel(newRowSelectionModel);
      }}
      rowSelectionModel={rowSelectionModel}
      checkboxSelection
      disableColumnMenu
      hideFooterPagination={true}
    />
  )
}

export default DataTable;