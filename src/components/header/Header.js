import React, { useState } from "react";
import { HeaderWrapper } from "./Header.style";
import Button from "@mui/material/Button";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import LoadingButton from "@mui/lab/LoadingButton";
import { useStateValue } from "../../contexts/StateProvider";
import { actionTypes } from "../../contexts/reducer";
import { createApi } from "unsplash-js";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

function Header() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [{}, dispatch] = useStateValue();
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const unsplash = createApi({
    accessKey: "khYtkAFvv6TR9P0nFRUCH-TZS9UHrrAY43md8RcvOqM",
  });
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      const pageNo = getRndInteger(1, 20);
      if (query.length < 1) {
        unsplash.photos.list({ page: pageNo, perPage: 15 }).then((res) => {
          dispatch({
            type: actionTypes.SET_DATA,
            Photodata: res.response.results,
          });
          setLoading(false);
        });
      } else {
        unsplash.search
          .getCollections({
            query: query,
            page: pageNo,
            perPage: 15,
          })
          .then((res) => {
            dispatch({
              type: actionTypes.SET_DATA,
              Photodata: res.response.results,
            });
            setLoading(false);
          });
      }
    }, 500);
  };
  const handleClickSearch = () => {
    unsplash.search
      .getCollections({
        query: query,
        page: 1,
        perPage: 15,
      })
      .then((res) => {
        dispatch({
          type: actionTypes.SET_DATA,
          Photodata: res.response.results,
        });
        dispatch({
          type: actionTypes.SET_QUERY,
          query: query,
        });
      });
  };
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <HeaderWrapper>
      <h1>Gallery</h1>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        {!loading ? (
          <Button
            variant="contained"
            startIcon={<ShuffleIcon />}
            className="Button"
            onClick={handleClick}
          >
            Shuffle
          </Button>
        ) : (
          <LoadingButton
            color="secondary"
            loading
            className="Button"
            loadingPosition="start"
            startIcon={<ShuffleIcon />}
            variant="contained"
          >
            Shuffle
          </LoadingButton>
        )}
        <SearchIcon
          sx={{ color: "action.active", mr: 1, my: 0.5 }}
          onClick={handleClickSearch}
          className={"icon"}
        />
        <TextField
          id="input-with-sx"
          label="Search"
          variant="standard"
          onChange={handleChange}
        />
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
