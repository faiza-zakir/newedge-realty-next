import Image from "next/image";
import { Row, Col, Container, Accordion } from "react-bootstrap";
// css
import "./styles.scss";

const ExpertTips = ({ expertTipsData }) => {
  return (
    <div className="expert_tips_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6}>
            <h2 className="main_sec_heading">{expertTipsData?.title}</h2>
            <Accordion defaultActiveKey={1} flush>
              {expertTipsData?.tips?.map((item, i) => (
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
              <Image src={expertTipsData?.featured_img} alt="invest" />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExpertTips;
