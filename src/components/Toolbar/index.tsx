import React from "react";
import { Box, Button, Stack } from "@mui/material";
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
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ display: "flex", mb: 2 }}>
            <SearchInput searchText={searchText} setSearchText={setSearchText} />
            <Button 
                variant="contained"
                startIcon={<AddIcon />}
                onClick={ e => setOpen(true)}
                sx={{height: 40}}
            >
                Create Order
            </Button>
            <Button 
                variant="contained" 
                startIcon={<DeleteIcon />} 
                disabled={!rowSelectionModel.length}
                onClick={handleDeleteTrackingOrder}
                sx={{height: 40}}
            >
                Delete Selected
            </Button>
            <OrderTypeDropDown selectedType={selectedType} setSelectedType={setSelectedType} />
        </Stack>
    )
}

export default ActionToolbar;