import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import CountUp from "react-countup";
// css
import "./styles.scss";

const CountsSection = ({ countsData }) => {
  return (
    <div className="counts_sec mt-60">
      <Container>
        <Row className="gy-5 gx-lg-5 align-items-center">
          <Col lg={6} className="order-last order-lg-first">
            <figure>
              <Image src={countsData?.featured_img} alt="count" />
            </figure>
          </Col>
          <Col lg={6}>
            <Row className="gy-4">
              {countsData?.counts?.map((item) => (
                <Col xs={6} lg={4} key={item?.id}>
                  <div className="counts_wrap">
                    <h3 className="main_sec_heading">
                      <CountUp
                        enableScrollSpy={true}
                        start={0}
                        end={item?.title}
                        duration={4}
                        decimals={1} // This will ensure one decimal points
                        decimal="." // This sets the decimal separator
                      >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                      </CountUp>
                      {item?.tag}
                      {item?.unit && <span className="unit">{item?.unit}</span>}
                    </h3>
                    <p className="para_comm">{item?.details}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CountsSection;
