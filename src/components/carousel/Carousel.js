import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { CrouselWrapper } from "./Carousel.style";

export default function Carousel() {
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
  console.log(data);
  return (
    <CrouselWrapper>
      {data.map((val) => {
        return <img src={val.urls.thumb} alt="" />;
      })}
    </CrouselWrapper>
  );
}
