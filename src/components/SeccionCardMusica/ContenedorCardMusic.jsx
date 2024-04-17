import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import CardMusic from "./CardMusic";

const ContenedorSlider = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
`;

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        position: "absolute",
        right: "15px",
        zIndex: "5",
        borderRadius: "50%",
        padding: "5px",
      }}
      onClick={onClick}
      title="Avanzar"
    />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        background: "black",
        position: "absolute",
        left: "15px",
        zIndex: "5",
        borderRadius: "50%",
        padding: "5px",
      }}
      onClick={onClick}
      title="Retroceder"
    />
  );
}

const ContenedorCardMusicas = ({ musicasCategoria, categoriacolor }) => {
  const mobileHandleInfinite = () => {
    return musicasCategoria.length >= 1;
  };

  const tabletHandleInfinite = () => {
    return musicasCategoria.length >= 2;
  };

  const DesktopHandleInfinite = () => {
    return musicasCategoria.length >= 3;
  };

  const settings = {
    dots: true,
    speed: 500,
    infinite: DesktopHandleInfinite(),
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    vertical: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: DesktopHandleInfinite(),
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: tabletHandleInfinite(),
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: mobileHandleInfinite(),
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ContenedorSlider>
      <Slider {...settings}>
        {musicasCategoria.map((musica, index) => (
          <CardMusic
            key={index}
            video={musica}
            categoriacolor={categoriacolor}
          />
        ))}
      </Slider>
    </ContenedorSlider>
  );
};

export default ContenedorCardMusicas;
