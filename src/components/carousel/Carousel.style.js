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
    opacity: 0.5;
  }
  .slide.active {
    opacity: 1;
    transition: opacity 1s ease-in;
    transform: scale(1.08);
  }
`;
export const DetailsWrapper = styled.div`
  text {
    font-size: 1.5rem;
  }
  .icon {
    cursor: pointer;
  }
  margin-top: 1em;
  display: flex;
  justify-content: space-evenly;
  .iconsWrapper {
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
  }
`;
