/* eslint-disable no-mixed-operators */
import { useContext } from 'react';
import {
    Button,
    Dialog,
    DialogContent,
    Box,
    DialogTitle,
    DialogActions,
    TextField
} from '@mui/material';
import OrderTypeDropDown from '../OrderType';
import { ICreateOrder, CreateOrderContext } from '../../context';

const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
const CreateOrderModal = ({ open, setOpen, handleCreateOrder }: any) => {
    const { orderType, setOrderType, customerName, setCustomerName } = useContext(CreateOrderContext) as ICreateOrder;
    const handleReset = () => {
        setOrderType("");
        setCustomerName("");
    };

    const handleClose = () => {
        setOpen(false);
    };

    const createOrder = () => {
        const payload = {
            orderId: uuid(),
            orderType,
            customerName,
            createdByUserName: "Danish",
            createdDate: new Date().toUTCString()
        }
        setOpen(false);
        handleCreateOrder(payload);
        setOrderType("");
        setCustomerName("");
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            sx={{ m: 0, p: 2 }}
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle id="alert-dialog-title">
                Create Tracking Order
            </DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>

                <TextField
                    label="Customer Name"
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                    id="standard-size-small"
                    size="small"
                    sx={{ mt: 3 }}
                />

                <Box sx={{ mt: 3 }}>
                    <OrderTypeDropDown
                        noneOption={false}
                        selectedType={orderType}
                        setSelectedType={setOrderType}
                        width="100%"
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleReset}>Reset</Button>
                <Button onClick={createOrder} autoFocus disabled={!orderType || !customerName} variant="contained">
                    Create Order
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default CreateOrderModal;