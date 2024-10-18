import Image from "next/image";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PiLineVertical } from "react-icons/pi";
import BrochureForm from "../../common/brochure-form/BrochureForm";
// css
import "./styles.scss";

const Overview = ({ singleDeveloper }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);
  return (
    <div className="developer_detail_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5">
          <Col lg={6}>
            <figure>
              <Image src={singleDeveloper?.inner_page_image} alt="developer" />
            </figure>
          </Col>
          <Col lg={6}>
            <h2 className="sub_heading">{singleDeveloper?.title}</h2>
            <ul>
              <li>{singleDeveloper?.location}</li>
              <li>
                <PiLineVertical />
              </li>
              <li>{singleDeveloper?.experience}</li>
            </ul>
            <div
              className="general-details"
              dangerouslySetInnerHTML={{
                __html: singleDeveloper?.description,
              }}
            />
            <div className="btn_wrap">
              <button className="theme_btn2">View Available Projects</button>
              <button className="theme_btn3" onClick={handleModalShow}>
                Download Brochure
              </button>
            </div>
          </Col>
        </Row>
        <BrochureForm show={showModal} handleClose={handleModalClose} />
      </Container>
    </div>
  );
};

export default Overview;
