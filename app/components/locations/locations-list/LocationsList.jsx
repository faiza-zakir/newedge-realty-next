import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
// img
import projectImg from "../../../assets/home/commercial1.jpg";
// css
import "./styles.scss";

const LocationsList = ({ locationList }) => {
  const router = useRouter();
  const [visibleList, setVisibleList] = useState(12);
  const totalList = locationList?.length;

  const handleLoadMore = () => {
    // Increase the number of visible item
    setVisibleList((prevVisibleServices) => prevVisibleServices + 4);
  };

  return (
    <div className="location_list_area mt-5">
      <Container>
        {locationList?.length > 0 ? (
          <Row className="gy-4 gx-lg-3">
            {locationList?.slice(0, visibleList)?.map((location) => (
              <Col md={6} lg={3} key={location?.id}>
                <div
                  className="location_item"
                  onClick={() =>
                    router.push(
                      `/${location?.property_type?.route}/${location?.route}`
                    )
                  }
                >
                  <figure>
                    <Image
                      src={
                        location?.featured_img
                          ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${location?.featured_img}`
                          : projectImg
                      }
                      layout="fill"
                      objectFit="cover"
                      // width="300"
                      // height={"400"}
                      alt={location?.title}
                    />
                  </figure>
                  <div className="content_sec">
                    <p className="location">
                      <span>Starting from</span> ₹{location?.price}
                    </p>
                    <h3 className="sub_heading">{location?.title}</h3>
                    <p className="para_comm">
                      {location?.location?.title},{" "}
                      {location?.location?.zone?.title}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <p className="para_comm text-center">
            Sorry, there are no properties matching your criteria. Please try
            something else.
          </p>
        )}
        {visibleList < totalList && (
          <div className="text-center mt-5">
            <button className="theme_btn2" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default LocationsList;
