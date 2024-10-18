import { Row, Col, Container } from "react-bootstrap";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
// css
import "./styles.scss";

const ContactInfoSection = () => {
  return (
    <div className="contact-info-area mt-60">
      <Container>
        <span className="tag_line">Support</span>
        <h2 className="main_sec_heading">CONTACT US</h2>
        <Row className="gx-lg-5 gx-md-5 gy-5 gy-lg-0">
          <Col md={6} lg={4}>
            <div className="contact-item">
              <MdOutlineMailOutline className="icon-style" />
              <h3 className="sub_heading">Email</h3>
              <p className="para_comm">
                Reach out to us for any inquiries or support
              </p>
              <a href="mailto:info@newedgerealty.in">info@newedgerealty.in</a>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="contact-item">
              <FiPhone className="icon-style" />
              <h3 className="sub_heading">Phone</h3>
              <p className="para_comm">
                Call us for immediate assistance and information.
              </p>
              <a href="tel:+917940307106">+91 79 4030 7106</a>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="contact-item">
              <GrLocation className="icon-style" />
              <h3 className="sub_heading">Office</h3>
              <p className="para_comm">
                Visit us for personalized service and consultations:
              </p>
              <a
                href="https://maps.app.goo.gl/MVS1kSdHuf1x9T5g7"
                target="_blank"
                rel="noopener noreferrer"
              >
                212-214, Platinum Plaza, Opp. I.O.C. Petrol Pump, Bodakdev,
                Ahmedabad-380054, Gujarat, India.
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactInfoSection;
