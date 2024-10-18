"use client";
import Image from "next/image";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectForm from "../project-form/ProjectForm";
// css
import "./styles.scss";

const Details = ({ singleProject }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="project_detail_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5">
          <Col lg={6} className="order-last order-lg-first">
            <figure>
              <Image src={singleProject?.featured_img} alt="project" />
            </figure>
          </Col>
          <Col lg={6}>
            <h2 className="sub_heading">Overview</h2>
            <div
              className="general-details"
              dangerouslySetInnerHTML={{
                __html: singleProject?.long_description,
              }}
            />
            <button className="theme_btn2" onClick={handleShow}>
              Rent/Buy
            </button>
          </Col>
        </Row>
        <ProjectForm show={show} handleClose={handleClose} />
      </Container>
    </div>
  );
};

export default Details;
