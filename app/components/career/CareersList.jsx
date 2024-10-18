import { Col, Container, Row } from "react-bootstrap";
// import { FaClock } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// css
import "./styles.scss";

function CareersList() {
  return (
    <div className="mt-60 career_list_sec">
      <Container>
        <span className="tag_line">Career</span>
        <h3 className="main_sec_heading">Become A Part of AOM</h3>
        <p className="para_comm">
          AOM’s values are rooted in Chinese traditional culture, and its
          corporate culture attaches importance to self-cultivation and
          improvement, that is, improving one's abilities according to high
          standards, helping others achieve success, creating value for
          customers, and making contributions to society. We embrace fresh
          thinking and treat every employee equally. When you start your career,
          you will see how your work is connected to the company's objectives
          and the expectations we have of you.
        </p>
        <p className="para_comm">
          We welcome all kinds of talents to join the AOM family. Given the
          current low oil price, we are currently closing the hiring. If you are
          interested in future opportunities, please forward your resume or CV
          to the following Email address:{" "}
          <a href="mailto:antonenergy@antonoil.com">antonenergy@antonoil.com</a>
        </p>
        {/* <h3 className="main_sec_heading mb-5">Open Positions</h3> */}
        {/* <Row className="gy-4 g-lg-4">
          {[1, 2, 3, 4, 5, 6]?.map((item) => (
            <Col md="6" lg="6" key={item?.id}>
              <div className="job_item">
                <div className="title_wrap">
                  <h3>Job Title</h3>
                  <span>Department</span>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolor sapiente ipsa minus ea, nesciunt, autem debitis
                  accusantium error fuga amet odit. Voluptates doloribus
                  quibusdam, totam modi harum necessitatibus aperiam nostrum.
                </p>
                <ul>
                  <li>
                    <FaLocationDot className="icon_style" />
                    Location
                  </li>
                  <li>
                    <FaClock className="icon_style" />
                    Contract Type
                  </li>
                </ul>
                <button
                  className="theme_btn3"
                >
                  Apply Now
                </button>
              </div>
            </Col>
          ))}
        </Row> */}
      </Container>
    </div>
  );
}

export default CareersList;
