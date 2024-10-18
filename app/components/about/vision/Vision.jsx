import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const Vision = ({ visionData }) => {
  return (
    <div className="vision_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5">
          <Col lg={6} className="order-last order-lg-first">
            <span className="tag_line">{visionData?.tagLine}</span>
            <h2 className="main_sec_heading">{visionData?.title}</h2>
            <p className="para_comm">{visionData?.detail}</p>
          </Col>
          <Col lg={6}>
            <figure>
              <Image src={visionData?.featured_img} alt="vision" />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vision;
