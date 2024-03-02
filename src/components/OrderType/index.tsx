import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IOrderTypeDropdown } from '../../interface';

const OrderTypeDropDown = ({ selectedType, setSelectedType, noneOption = true, width="200px" }: IOrderTypeDropdown): JSX.Element => {
    const handleChange = (event: SelectChangeEvent) => {
        setSelectedType(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ p: 0, width }} size="small">
                <InputLabel id="orderTypeDropdown">Order Type</InputLabel>
                <Select
                    labelId="orderTypeDropdown"
                    id="selectOrderTypeDropdown"
                    value={selectedType}
                    onChange={handleChange}
                    label="Order Type"
                    fullWidth
                    sx={{ maxHeight: 40, p: 0, m: 0 }}
                >
                    {noneOption && <MenuItem value="">None</MenuItem>}
                    <MenuItem value="Standard">Standard</MenuItem>
                    <MenuItem value="SaleOrder">SaleOrder</MenuItem>
                    <MenuItem value="PurchaseOrder">PurchaseOrder</MenuItem>
                    <MenuItem value="TransferOrder">TransferOrder</MenuItem>
                    <MenuItem value="ReturnOrder">ReturnOrder</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default OrderTypeDropDown;