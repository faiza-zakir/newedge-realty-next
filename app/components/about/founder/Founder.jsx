import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const Founder = ({ founderData }) => {
  return (
    <div className="founder_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5">
          <Col lg={6}>
            <figure>
              <Image src={founderData?.featured_img} alt="founder" />
            </figure>
          </Col>
          <Col lg={6}>
            <span className="tag_line">{founderData?.tagLine}</span>
            <h2 className="main_sec_heading">{founderData?.title}</h2>
            <p className="para_comm">{founderData?.detail}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Founder;
