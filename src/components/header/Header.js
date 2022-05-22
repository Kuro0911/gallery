import React, { useState } from "react";
import { HeaderWrapper } from "./Header.style";
import Button from "@mui/material/Button";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import LoadingButton from "@mui/lab/LoadingButton";
import { useStateValue } from "../../contexts/StateProvider";
import { actionTypes } from "../../contexts/reducer";
import { createApi } from "unsplash-js";

function Header() {
  const [loading, setLoading] = useState(false);
  const [{ Photodata }, dispatch] = useStateValue();
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      const unsplash = createApi({
        accessKey: "khYtkAFvv6TR9P0nFRUCH-TZS9UHrrAY43md8RcvOqM",
      });
      const pageNo = getRndInteger(1, 20);
      unsplash.photos.list({ page: pageNo, perPage: 15 }).then((res) => {
        setLoading(false);
        dispatch({
          type: actionTypes.SET_DATA,
          Photodata: res.response.results,
        });
      });
    }, 500);
  };
  return (
    <HeaderWrapper>
      <h1>Gallery</h1>
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
    </HeaderWrapper>
  );
}

export default Header;
