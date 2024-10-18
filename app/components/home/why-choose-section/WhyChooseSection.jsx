import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
// css
import "./styles.scss";

const WhyChooseSection = ({ whyChooseData }) => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0; // Reset scroll to start
        } else {
          scrollContainer.scrollLeft += 2; // Adjust scroll speed here
        }
      }, 15); // Adjust scroll timing here
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    // Set up intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Start auto-scroll when in view
    if (isInView) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => {
      clearInterval(scrollInterval);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isInView]);

  // Animation variant for items
  const itemVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  // Hook for controlling animation for each item
  const useItemAnimation = () => {
    const controls = useAnimation();
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              controls.start("visible");
            } else {
              controls.start("hidden");
            }
          });
        },
        { threshold: 0.5 } // Trigger animation when 50% of the item is visible
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [controls]);

    return { ref, controls };
  };

  return (
    <div className="why-choose-sec mt-60" ref={sectionRef}>
      <Container>
        <div className="scroll-container" ref={scrollContainerRef}>
          <div className="scroll-content">
            {/* Why Choose Us Section */}
            <div className="why-choose">
              <span className="tag_line">{whyChooseData?.tagLine}</span>
              <h2 className="main_sec_heading">{whyChooseData?.title}</h2>
              <p className="para_comm">{whyChooseData?.detail}</p>
              <button className="theme_btn2">Learn More</button>
            </div>
            {whyChooseData?.processData?.map((item, i) => {
              const { ref, controls } = useItemAnimation(); // Get ref and controls for each item
              return (
                <motion.div
                  ref={ref}
                  key={i}
                  className="process_item_wrap"
                  variants={itemVariant}
                  initial="hidden"
                  animate={controls}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: i * 0.1, // Optional: Add a small delay for each item
                  }}
                >
                  {item?.icon ? (
                    <div className="process_item">
                      <Image src={item?.icon} alt="process" className="icon" />
                      <div className="content_sec">
                        <h3 className="sub_heading">{item?.title}</h3>
                        <h4 className="slide_number">
                          {i + 1 < 10 ? `0${i + 1}` : i + 1}
                        </h4>
                      </div>
                    </div>
                  ) : (
                    <div className="process_item2">
                      <figure>
                        <Image
                          src={item?.img}
                          alt="process"
                          className="image"
                        />
                      </figure>
                      <div className="content_sec">
                        <h3 className="sub_heading">{item?.title}</h3>
                        <h4 className="slide_number">
                          {i + 1 < 10 ? `0${i + 1}` : i + 1}
                        </h4>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseSection;

// import { Row, Col, Container } from "react-bootstrap";
// import Slider from "react-slick";

// import { motion } from "framer-motion";
// // css
// import "./styles.scss";

// const settings = {
//   dots: false,
//   arrows: false,
//   infinite: false,
//   speed: 800,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   lazyLoad: true,
//   pauseOnHover: false,
//   centerMode: true,
//   centerPadding: "0px",
//   responsive: [
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

// const WhyChooseSection = ({ whyChooseData }) => {
//   return (
//     <div className="why-choose-sec mt-60">
//       <Container>
//         <Row className="gy-5 gy-lg-0 gx-lg-5">
//           <Col lg={5}>
//             <span className="tag_line">{whyChooseData?.tagLine}</span>
//             <h2 className="main_sec_heading">{whyChooseData?.title}</h2>
//             <p className="para_comm">{whyChooseData?.detail}</p>
//             <button className="theme_btn2">Learn More</button>
//           </Col>
//           <Col lg={7} className="slider_sec">
//             <Slider {...settings}>
//               {whyChooseData?.processData?.map((item, i) => (
//                 <motion.div
//                   key={i}
//                   className="process_item_wrap"
//                   initial={{ scale: 0.5 }}
//                   animate={{ scale: 1 }}
//                   exit={{ scale: 0.5 }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 100,
//                     damping: 20,
//                   }}
//                 >
//                   {item?.icon ? (
//                     <div className="process_item">
//                       <Image src={item?.icon} alt="process" className="icon" />
//                       <div className="content_sec">
//                         <h3 className="sub_heading">{item?.title}</h3>
//                         <h4 className="slide_number">
//                           {i + 1 < 10 ? `0${i + 1}` : i + 1}
//                         </h4>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="process_item2">
//                       <figure>
//                         <Image src={item?.img} alt="process" className="image" />
//                       </figure>
//                       <div className="content_sec">
//                         <h3 className="sub_heading">{item?.title}</h3>
//                         <h4 className="slide_number">
//                           {i + 1 < 10 ? `0${i + 1}` : i + 1}
//                         </h4>
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               ))}
//             </Slider>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default WhyChooseSection;
