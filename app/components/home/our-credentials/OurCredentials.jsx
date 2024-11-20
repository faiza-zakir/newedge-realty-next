import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// images
import client1 from "../../../assets/clients/cred1.png";
import client2 from "../../../assets/clients/cred2.png";
import client3 from "../../../assets/clients/cred3.png";
import client4 from "../../../assets/clients/cred4.png";
import client5 from "../../../assets/clients/cred5.jpg";
import client6 from "../../../assets/clients/cred6.png";

// css
import "./styles.scss";

const credData = [
  {
    img: client1,
  },
  {
    img: client2,
  },
  {
    img: client3,
  },
  {
    img: client4,
  },
  {
    img: client5,
  },
  {
    img: client6,
  },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 800,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const OurCredentials = () => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const showArrows = credData?.length > settings.slidesToShow;

  const PrevArrow = () => (
    <button
      className="slider_custom_arrows"
      onClick={previousSlide}
      disabled={currentSlide === 0}
    >
      <FaAngleLeft fontSize={"24px"} />
    </button>
  );

  const NextArrow = () => (
    <button
      className="slider_custom_arrows ms-3"
      onClick={nextSlide}
      disabled={currentSlide >= credData?.length - settings.slidesToShow}
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="cred_sec mt-60">
      <Container>
        <div className="header_wrap">
          <h2 className="main_sec_heading">Our Credentials</h2>
          {showArrows && (
            <div className="desktop_view">
              <PrevArrow />
              <NextArrow />
            </div>
          )}
        </div>
        <Slider
          {...settings}
          ref={sliderRef}
          afterChange={(index) => setCurrentSlide(index)}
        >
          {credData?.map((item, i) => (
            <div className="cred_item mt-4" key={i}>
              <div className="img_wrap">
                <Image
                  // src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.img}`}
                  src={item?.img}
                  width={100}
                  height={160}
                  alt="client"
                />
              </div>
            </div>
          ))}
        </Slider>
        {showArrows && (
          <div className="mobile_view">
            <PrevArrow />
            <NextArrow />
          </div>
        )}
      </Container>
    </div>
  );
};

export default OurCredentials;
