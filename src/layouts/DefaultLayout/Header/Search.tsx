import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { ClickAwayListener, List, ListItem, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Popper from "@mui/material/Popper";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import Link from "next/link";
import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const SearchInput = styled("div")({
    maxWidth: "750px",
    height: "40px",
    flexGrow: 1,
    border: "1px solid red",
    borderRadius: "10px",
    display: "flex",
    "@media (max-width: 600px)": {
        width: "200px",
        background: "red",
    },
});

const Loading = () => (
    <Box mr="4px">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{ margin: "auto", background: "#fff", display: "block" }}
            width="20px"
            height="20px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <circle
                cx="50"
                cy="50"
                fill="none"
                stroke="#2068db"
                strokeWidth="10"
                r="35"
                strokeDasharray="164.93361431346415 56.97787143782138"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                ></animateTransform>
            </circle>
        </svg>
    </Box>
);

function Search() {
    const [activeResult, setActiveResult] = useState<boolean>(false);
    const popperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [searchValue, setSearchValue] = useState<string>("");

    const handleClickAway = (): void => {
        setActiveResult(false);
    };
    const handleClick = (): void => {
        setActiveResult(true);
    };

    const handleClearSearch = (): void => {
        setSearchValue("");
        inputRef.current?.querySelector("input")?.focus();
        setActiveResult(false);
    };

    const loading = true;

    console.log(inputRef.current);

    return (
        <>
            <ClickAwayListener onClickAway={handleClickAway}>
                <SearchInput aria-describedby="SearchResults" ref={popperRef}>
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
                                mr: "3rem",
                            },

                            autoComplete: "off",
                            endAdornment: (
                                <InputAdornment position="start">
                                    {searchValue ? (
                                        <Box
                                            sx={{
                                                cursor: "pointer",
                                                p: "4px",
                                                pt: "6.4px",
                                                "&:hover": { opacity: "0.8" },
                                            }}
                                            onClick={handleClearSearch}
                                        >
                                            <CloseIcon />
                                        </Box>
                                    ) : (
                                        <SearchIcon fontSize="large" />
                                    )}
                                </InputAdornment>
                            ),
                            ref: inputRef,
                        }}
                        onClick={handleClick}
                        sx={{ width: "100%", height: "100%", border: "none" }}
                        fullWidth
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Hôm nay bạn muốn tìm gì?"
                    />

                    <Button sx={{ fontSize: "1.2rem", width: "100px" }}>Tìm kiếm</Button>
                </SearchInput>
            </ClickAwayListener>

            <Popper id="SearchResults" open={activeResult} anchorEl={popperRef.current} sx={{ zIndex: 9999 }}>
                <Box
                    position="relative"
                    minHeight="250px"
                    maxHeight="450px"
                    sx={{ zIndex: "1000", bgcolor: "#fff", overflowY: "auto", width: { md: "750px" } }}
                    boxShadow={2}
                    p="1rem 2rem"
                >
                    <Stack direction="row" alignItems="center" sx={{ fontSize: { md: "1.8rem" } }}>
                        {!searchValue && (
                            <>
                                <StorefrontIcon color="warning" sx={{ mr: "1rem" }} fontSize="large" />
                                Lịch sử tìm kiếm
                            </>
                        )}

                        {loading ? (
                            <>
                                <Loading />
                                Tìm {searchValue}
                            </>
                        ) : (
                            <>Kết quả tìm {searchValue}</>
                        )}
                    </Stack>

                    <List>
                        <Link href="/cart">
                            <ListItem
                                sx={{
                                    p: "0",
                                    fontSize: "1.66rem",
                                    fontWeight: "500",
                                    mb: "6px",
                                    color: "#374151",
                                }}
                            >
                                <SearchIcon sx={{ mr: "6px", fontSize: "1.8rem" }} />
                                áo phông oversize
                            </ListItem>
                        </Link>
                        <Link href="/">
                            <ListItem
                                sx={{
                                    p: "0",
                                    fontSize: "1.66rem",
                                    fontWeight: "500",
                                    mb: "6px",
                                    color: "#374151",
                                }}
                            >
                                <SearchIcon sx={{ mr: "6px", fontSize: "1.8rem" }} />
                                áo phông oversize
                            </ListItem>
                        </Link>
                    </List>
                </Box>
            </Popper>
        </>
    );
}

export default Search;
