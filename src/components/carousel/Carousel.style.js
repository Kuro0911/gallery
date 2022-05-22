import styled from "styled-components";
export const CrouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 60px;
`;
export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  .icons {
    cursor: pointer;
  }
`;
export const ImgWrapper = styled.div`
  .slide {
    object-fit: contain;
    height: 50vh;
    width: 45vw;
    opacity: 0;
    transition-duration: 1s ease;
  }
  .slide.active {
    opacity: 1;
    transition-duration: 1s ease;
    transform: scale(1.08);
  }
  .slide.notactive {
    opacity: 0.5;
    transition-duration: 1s ease;
    transform: scale(1.08);
  }
`;
