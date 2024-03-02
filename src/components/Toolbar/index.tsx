import React from "react";
import { Button, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { SearchInput, OrderTypeDropDown } from "..";

const ActionToolbar = ({
    selectedType,
    setSelectedType,
    searchText,
    setSearchText,
    rowSelectionModel,
    handleDeleteTrackingOrder,
    setOpen
}: any) => {
    return (
        // <Box sx={{display: "inlineFlex",height: 70, alignItems: "stretch"}}>
        <Stack direction="row" spacing={2} sx={{ display: "inlineFlex" }}>
            <SearchInput searchText={searchText} setSearchText={setSearchText} />
            <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={e => setOpen(true)}
            >
                Create Order
            </Button>
            <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                disabled={!rowSelectionModel.length}
                onClick={handleDeleteTrackingOrder}
            >
                Delete Selected
            </Button>
            <OrderTypeDropDown selectedType={selectedType} setSelectedType={setSelectedType} />
        </Stack>
    )
}

export default ActionToolbar;