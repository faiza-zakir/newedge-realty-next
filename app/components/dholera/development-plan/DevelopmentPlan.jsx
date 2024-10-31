import Image from "next/image";
import { Row, Col, Container, Accordion } from "react-bootstrap";
// css
import "./styles.scss";

const DevelopmentPlan = ({ devPlanData }) => {
  return (
    <div className="dev_plan_sec mt-60">
      <Container>
        <h2 className="main_sec_heading">{devPlanData?.title}</h2>
        <p className="para_comm">{devPlanData?.detail}</p>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6}>
            <figure>
              <Image
                src={devPlanData?.featured_img}
                layout="fill"
                objectFit="cover"
                alt={devPlanData?.img_alt}
                title={devPlanData?.img_title}
              />
            </figure>
          </Col>
          <Col lg={6}>
            <Accordion defaultActiveKey={1} flush>
              {devPlanData?.planList?.map((item, i) => (
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
        </Row>
      </Container>
    </div>
  );
};

export default DevelopmentPlan;
