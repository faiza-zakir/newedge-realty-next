import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
// css
import "./styles.scss";

const Airport = ({ airportData }) => {
  return (
    <div className="airport_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6}>
            <figure>
              <Image
                src={airportData?.featured_img}
                layout="fill"
                objectFit="cover"
                alt={airportData?.img_alt}
                title={airportData?.img_title}
              />
            </figure>
          </Col>
          <Col lg={6}>
            <h2 className="main_sec_heading">{airportData?.title}</h2>
            <div
              className="general-details"
              dangerouslySetInnerHTML={{ __html: airportData?.detail }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Airport;
