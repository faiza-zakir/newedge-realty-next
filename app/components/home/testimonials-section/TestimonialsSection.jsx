import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// api
import { fetchTestimonialData } from "../../../apis/commonApi";
// img
import userImg from "../../../assets/home/userImg.jpg";
// css
import "./styles.scss";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 800,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

const TestimonialsSection = ({ testimonialsData }) => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [testimonialsData, setTestimonialsData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchTestimonialListData = async () => {
  //     try {
  //       setIsLoading(true); // Show the loader
  //       const { data } = await fetchTestimonialData();
  //       setTestimonialsData(data);
  //     } catch (error) {
  //       console.error("Error fetching Data:", error);
  //     } finally {
  //       setIsLoading(false); // Hide the loader
  //     }
  //   };

  //   fetchTestimonialListData();
  // }, []);

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

  const showArrows = testimonialsData?.length > settings.slidesToShow;

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
      disabled={
        currentSlide >= testimonialsData?.length - settings.slidesToShow
      }
    >
      <FaAngleRight fontSize={"24px"} />
    </button>
  );
  return (
    <div className="testimonials-sec mt-60">
      <Container>
        <div className="header_wrap">
          <div>
            <span className="tag_line">Our Clients</span>
            <h2 className="main_sec_heading">TESTIMONIALS</h2>
          </div>
          {showArrows && (
            <div className="desktop_view">
              <PrevArrow />
              <NextArrow />
            </div>
          )}
        </div>
        {/* {isLoading ? (
          <p className="para_comm text-center">loading...</p>
        ) : ( */}
        <Slider
          {...settings}
          ref={sliderRef}
          afterChange={(index) => setCurrentSlide(index)}
        >
          {testimonialsData?.map((item) => (
            <div className="testimonial_wrap" key={item?.id}>
              <div className="testimonial_item">
                <div
                  className="general-details"
                  dangerouslySetInnerHTML={{ __html: item?.review }}
                />
                <hr />
                <div className="d-flex align-items-center gap-3 mt-4">
                  <Image
                    src={item?.user_img ? item?.user_img : userImg}
                    alt="avatar"
                  />
                  <div className="content_sec">
                    <h3 className="sub_heading">{item?.name}</h3>
                    <p className="para_comm">{item?.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* )} */}
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

export default TestimonialsSection;
