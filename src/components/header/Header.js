import React, { useState } from "react";
import { HeaderWrapper } from "./Header.style";
import Button from "@mui/material/Button";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import LoadingButton from "@mui/lab/LoadingButton";

function Header() {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
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
