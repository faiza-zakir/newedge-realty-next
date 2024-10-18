import Image from "next/image";
import { Row, Col, Container, Accordion } from "react-bootstrap";
// css
import "./styles.scss";

const Dmic = ({ dmicData }) => {
  return (
    <div className="dmic_sec mt-60">
      <Container>
        <h2 className="main_sec_heading">{dmicData?.title}</h2>
        <p className="para_comm">{dmicData?.detail}</p>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6}>
            <Accordion defaultActiveKey={1} flush>
              {dmicData?.dmicList?.map((item, i) => (
                <Accordion.Item eventKey={i + 1} key={item?.id}>
                  <Accordion.Header>{item?.title}</Accordion.Header>
                  <Accordion.Body>
                    <div
                      className="general-details"
                      dangerouslySetInnerHTML={{ __html: item?.detail }}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          <Col lg={6}>
            <figure>
              <Image src={dmicData?.featured_img} alt="invest" />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dmic;
