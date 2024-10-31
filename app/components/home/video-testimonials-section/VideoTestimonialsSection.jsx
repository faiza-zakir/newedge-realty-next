import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

import ModalVideo from "react-modal-video";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
// api
import { fetchTestimonialData } from "../../../apis/commonApi";
// img
import userImg from "../../../assets/home/userImg.webp";
// css
import "./styles.scss";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 4,
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

// const TestimonialsSection = ({ testimonialsData }) => {
const TestimonialsSection = () => {
  const sliderRef = useRef();
  const [isOpen, setOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTestimonialListData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchTestimonialData();
        let updatedData = [...data]?.filter((item) => item?.type == "video");
        setTestimonialsData(updatedData);
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchTestimonialListData();
  }, []);

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
    <div className="video-testimonials-sec mt-60">
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
        {isLoading ? (
          <p className="para_comm text-center">loading...</p>
        ) : (
          <Slider
            {...settings}
            ref={sliderRef}
            afterChange={(index) => setCurrentSlide(index)}
          >
            {testimonialsData?.map((item) => (
              <div className="video_testimonial_wrap" key={item?.id}>
                <div className="video_testimonial_item">
                  <div className="gap-3 mt-4">
                    <figure>
                      <Image
                        src={
                          item?.user_img
                            ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.user_img}`
                            : userImg
                        }
                        layout="fill"
                        objectFit="cover"
                        alt={item?.name}
                        // width="100"
                        // height={"100"}
                      />
                    </figure>
                    <div className="content_sec">
                      <div>
                        <h3 className="sub_heading">{item?.name}</h3>
                        <p className="para_comm">{item?.designation}</p>
                      </div>
                      <div
                        className="icon_wrape"
                        onClick={() => {
                          setOpen(true);
                          setVideoLink(item?.video_url);
                        }}
                      >
                        <FaCirclePlay
                          fontSize={"30px"}
                          className="icon_style"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
        <ModalVideo
          channel={"vimeo"}
          isOpen={isOpen}
          videoId={videoLink}
          allowFullScreen={true}
          ratio="16:19"
          onClose={() => setOpen(false)}
        />
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
