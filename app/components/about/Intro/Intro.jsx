import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const Intro = ({ introData }) => {
  return (
    <div className="intro_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5">
          <Col lg={6}>
            <span className="tag_line">{introData?.tagLine}</span>
            <h2 className="main_sec_heading">{introData?.title}</h2>
            <p className="para_comm">{introData?.detail}</p>
          </Col>
          <Col lg={6}>
            <figure>
              <Image
                src={introData?.featured_img}
                alt="about"
                layout="fill"
                objectFit="cover"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
