import React from "react";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './style.css';
interface IProps {
    searchText: string;
    setSearchText: (val: string) => void;
}
const SearchInput = ({ searchText, setSearchText }: IProps) => {
    return (
        <TextField
            placeholder="Custom Search"
            size="small"
            sx={{
                height: 50
            }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            InputProps={{
                endAdornment: (
                    <div className="search-icon">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </div>

                )
            }}
        />
    )
}

export default SearchInput;
