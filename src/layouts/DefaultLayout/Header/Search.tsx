import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import { Popper } from "@mui/material";

const SearchInput = styled("div")({
    width: "600px",
    height: "46px",
    border: "1px solid red",
    borderRadius: "10px",
    display: "flex",
    md: {
        width: "600px",
    },
});

function Search() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;
    return (
        <>
            <SearchInput aria-describedby={id} onClick={handleClick}>
                <TextField
                    InputProps={{
                        sx: {
                            width: "100%",
                            height: "100%",
                            fontSize: "1.6rem",
                            color: "black",
                            border: "none",
                            outline: "none",
                            pl: "1rem",
                        },
                        endAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon fontSize="large" />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ width: "100%", height: "100%", border: "none" }}
                    fullWidth
                    variant="outlined"
                    placeholder="Hôm nay bạn muốn tìm gì?"
                />

                <Button sx={{ fontSize: "1.2rem", width: "100px" }}>Tìm kiếm</Button>
            </SearchInput>

            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box width="600px" height="400px" sx={{ bgcolor: "red" }}>
                    <h1>Heloo mọi người</h1>
                </Box>
            </Popper>
        </>
    );
}

export default Search;
