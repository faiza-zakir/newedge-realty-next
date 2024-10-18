"use client";
import Image from "next/image";
import Slider from "react-slick";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// css
import "./style.scss";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button className="nextArrow_wrape" onClick={onClick}>
      <FaAngleRight />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="prevArrow_wrape" onClick={onClick}>
      <FaAngleLeft />
    </button>
  );
}

const settings = {
  dots: true,
  infinite: false,
  arrows: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  // autoplay: true,
  // autoplaySpeed: 2000,
  lazyLoad: true,
  pauseOnHover: false,
};

function ProjectSlider({ sliderData }) {
  return (
    <div className="project_slider_sec mt-60">
      <Slider {...settings}>
        {sliderData?.map((item, i) => (
          <div key={i}>
            <figure>
              <Image src={item} alt="project" />
            </figure>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProjectSlider;
