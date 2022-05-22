import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import {
  ArrowWrapper,
  CrouselWrapper,
  DetailsWrapper,
  ImgWrapper,
} from "./Carousel.style";
import { useStateValue } from "../../contexts/StateProvider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DownloadIcon from "@mui/icons-material/Download";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Carousel() {
  const [{ Photodata, query }] = useStateValue();
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsplash = createApi({
      accessKey: "khYtkAFvv6TR9P0nFRUCH-TZS9UHrrAY43md8RcvOqM",
    });
    unsplash.photos.list({ page: 2, perPage: 15 }).then((res) => {
      setData(res.response.results);
    });
  }, []);
  const Arrows = () => {
    const Next = () => {
      if (Photodata.length === 1) {
        setCurrent(current === data.length - 1 ? 0 : current + 1);
      } else {
        setCurrent(current === Photodata.length - 1 ? 0 : current + 1);
      }
    };
    const Prev = () => {
      if (Photodata.length === 1) {
        setCurrent(current === 0 ? data.length - 1 : current - 1);
      } else {
        setCurrent(current === 0 ? Photodata.length - 1 : current - 1);
      }
    };
    return (
      <ArrowWrapper>
        <ArrowBackIosIcon className={"icons"} onClick={Prev} />
        <ArrowForwardIosIcon className={"icons"} onClick={Next} />
      </ArrowWrapper>
    );
  };
  const handleAccount = ({ val }) => {
    window.open(val.user.portfolio_url);
  };
  const handleDownload = ({ val }) => {
    if (val.links.download !== undefined) {
      window.open(val.links.download);
    } else {
      window.open(val.cover_photo.links.download);
    }
  };
  const Details = ({ val }) => {
    return (
      <DetailsWrapper>
        <div className={"iconsWrapper"}>
          <text>
            {val.likes !== undefined ? val.likes : val.cover_photo.likes}
          </text>
          <FavoriteIcon />
        </div>
        <AccountBoxIcon
          onClick={() => handleAccount({ val })}
          className={"icon"}
        />
        <DownloadIcon
          onClick={() => handleDownload({ val })}
          className={"icon"}
        />
      </DetailsWrapper>
    );
  };
  return Photodata.length === 1 ? (
    <>
      <CrouselWrapper>
        {data.map((val, key) => {
          return (
            <ImgWrapper>
              {key === current - 1 && (
                <>
                  <img src={val.urls.raw} alt="" className={"slide"} />
                  <Details val={val} />
                </>
              )}
              {key === current && (
                <>
                  <img
                    src={val.urls.raw}
                    alt=""
                    className={key === current ? "slide active" : "slide"}
                  />
                  <Details val={val} />
                </>
              )}
              {key === current + 1 && (
                <>
                  <img src={val.urls.raw} alt="" className={"slide"} />
                  <Details val={val} />
                </>
              )}
            </ImgWrapper>
          );
        })}
      </CrouselWrapper>
      <Arrows />
    </>
  ) : query.length < 1 ? (
    <>
      <CrouselWrapper>
        {Photodata.map((val, key) => {
          return (
            <ImgWrapper>
              {key === current - 1 && (
                <>
                  <img src={val.urls.raw} alt="" className={"slide"} />
                  <Details val={val} isPhoto />
                </>
              )}
              {key === current && (
                <>
                  <img
                    src={val.urls.raw}
                    alt=""
                    className={key === current ? "slide active" : "slide"}
                  />
                  <Details val={val} isPhoto />
                </>
              )}
              {key === current + 1 && (
                <>
                  <img src={val.urls.raw} alt="" className={"slide"} />
                  <Details val={val} isPhoto />
                </>
              )}
            </ImgWrapper>
          );
        })}
      </CrouselWrapper>
      <Arrows />
    </>
  ) : (
    <>
      <CrouselWrapper>
        {Photodata.map((val, key) => {
          return (
            <ImgWrapper>
              {key === current - 1 && (
                <>
                  <img
                    src={val.cover_photo.urls.raw}
                    alt=""
                    className={"slide"}
                  />
                  <Details val={val} isPhoto />
                </>
              )}
              {key === current && (
                <>
                  <img
                    src={val.cover_photo.urls.raw}
                    alt=""
                    className={key === current ? "slide active" : "slide"}
                  />
                  <Details val={val} isPhoto />
                </>
              )}
              {key === current + 1 && (
                <>
                  <img
                    src={val.cover_photo.urls.raw}
                    alt=""
                    className={"slide"}
                  />
                  <Details val={val} isPhoto />
                </>
              )}
            </ImgWrapper>
          );
        })}
      </CrouselWrapper>
      <Arrows />
    </>
  );
}
