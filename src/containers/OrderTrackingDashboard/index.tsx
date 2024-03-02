import React, { Fragment, useEffect, useState } from "react";
import { Container, Snackbar } from '@mui/material';
import { DataTable, AppHeader, CreateOrderModal, ActionToolbar } from "../../components";
import { columns } from "./columns";
import { fetchTrackingOrder, deleteTrackingOrder, createOrderTrackingOrder } from "../../network/api";
import { CreateOrderProvider } from "../../context";
import { IOrderData } from "../../interface";
import { parseData } from "../utils";

const OrderTrackingDashboard = () => {
    const [selectedType, setSelectedType] = useState("");
    const [searchText, setSearchText] = useState("");
    const [orderData, setOrderData] = useState<IOrderData[]>([]);
    const [filterData, setFilterData] = useState<IOrderData[]>([])
    const [rowSelectionModel, setRowSelectionModel] = useState([]);
    const [open, setOpen] = useState(false);
    const [msgData, setMsgData] = useState({ open: false, message: '' });

    const handleFetchTrackingNumber = () => {
        fetchTrackingOrder().then(res => {
            const data: IOrderData[] = parseData(res.data);
            setOrderData(data);
            setFilterData(data);
        })
    }
    useEffect(() => {
        handleFetchTrackingNumber();
    }, [])

    const handleDeleteTrackingOrder = () => {
        deleteTrackingOrder(rowSelectionModel).then(res => {
            handleFetchTrackingNumber();
            setMsgData({ open: true, message: 'Order has been deleted successfully' })
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        let data = [...orderData];
        if (searchText || selectedType) {
            data = data.filter(d => d.orderId.indexOf(searchText) !== -1 && (selectedType ? d.orderType === selectedType : true));
            setFilterData(data);
        } else {
            setFilterData(orderData);
        }
    }, [searchText, selectedType, orderData])

    const handleSnackbarClose = () => {
        setMsgData({ open: false, message: '' })
    }

    const handleCreateOrder = (payload: any) => {
        console.log(payload);
        createOrderTrackingOrder(payload).then((res) => {
            setMsgData({ open: true, message: 'Order has been Created successfully' })
            handleFetchTrackingNumber();
        });
    }
    return (
        <Fragment>
            <Snackbar
                open={msgData?.open}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message={msgData.message}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            />
            <CreateOrderProvider>
                <CreateOrderModal open={open} setOpen={setOpen} handleCreateOrder={handleCreateOrder} />
            </CreateOrderProvider>
            <AppHeader />
            <Container maxWidth="xl" sx={{ marginTop: 4 }}>
                <ActionToolbar
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    rowSelectionModel={rowSelectionModel}
                    handleDeleteTrackingOrder={handleDeleteTrackingOrder}
                    setOpen={setOpen}
                />
                <DataTable columns={columns} data={filterData} rowSelectionModel={rowSelectionModel} setRowSelectionModel={setRowSelectionModel} />
            </Container>
        </Fragment>
    )
}

export default OrderTrackingDashboard;