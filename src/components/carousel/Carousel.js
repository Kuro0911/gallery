import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { ArrowWrapper, CrouselWrapper, ImgWrapper } from "./Carousel.style";
import { useStateValue } from "../../contexts/StateProvider";
import { actionTypes } from "../../contexts/reducer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function Carousel() {
  const [{ Photodata, query }, dispatch] = useStateValue();
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
      console.log(current);
    };
    const Prev = () => {
      if (Photodata.length === 1) {
        setCurrent(current === 0 ? data.length - 1 : current - 1);
      } else {
        setCurrent(current === 0 ? Photodata.length - 1 : current - 1);
      }
      console.log(current);
    };
    return (
      <ArrowWrapper>
        <ArrowBackIosIcon className={"icons"} onClick={Prev} />
        <ArrowForwardIosIcon className={"icons"} onClick={Next} />
      </ArrowWrapper>
    );
  };
  return Photodata.length === 1 ? (
    <>
      <CrouselWrapper>
        {data.map((val, key) => {
          return (
            <ImgWrapper>
              {key === current - 1 && (
                <img
                  src={val.urls.raw}
                  alt=""
                  className={key === current - 1 ? "slide notactive" : "slide"}
                />
              )}
              {key === current && (
                <img
                  src={val.urls.raw}
                  alt=""
                  className={key === current ? "slide active" : "slide"}
                />
              )}
              {key === current + 1 && (
                <img
                  src={val.urls.raw}
                  alt=""
                  className={key === current + 1 ? "slide notactive" : "slide"}
                />
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
                <img
                  src={val.urls.raw}
                  alt=""
                  className={key === current - 1 ? "slide notactive" : "slide"}
                />
              )}
              {key === current && (
                <img
                  src={val.urls.raw}
                  alt=""
                  className={key === current ? "slide active" : "slide"}
                />
              )}
              {key === current + 1 && (
                <img
                  src={val.urls.raw}
                  alt=""
                  className={key === current + 1 ? "slide notactive" : "slide"}
                />
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
                <img
                  src={val.cover_photo.urls.raw}
                  alt=""
                  className={key === current - 1 ? "slide notactive" : "slide"}
                />
              )}
              {key === current && (
                <img
                  src={val.cover_photo.urls.raw}
                  alt=""
                  className={key === current ? "slide active" : "slide"}
                />
              )}
              {key === current + 1 && (
                <img
                  src={val.cover_photo.urls.raw}
                  alt=""
                  className={key === current + 1 ? "slide notactive" : "slide"}
                />
              )}
            </ImgWrapper>
          );
        })}
      </CrouselWrapper>
      <Arrows />
    </>
  );
}
