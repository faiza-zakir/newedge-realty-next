import { useState, useRef } from "react";
import { Button, Col, Modal, Form, Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA
// css
import "./styles.scss";

const initailObject = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
};

const BrochureForm = ({ show, handleClose, brochureLink }) => {
  const [formValues, setFormValues] = useState(initailObject);
  const [loading, setLoading] = useState(false);
  const [mobileValue, setMobileValue] = useState("");
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null); // Store reCAPTCHA token
  const pdfDownloadLink = useRef(null); // Ref for hidden download link

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
    setErrors({ ...errors, captcha: "" }); // Clear CAPTCHA error on success
  };

  const PostFormContactFormData = async (updatedData) => {
    setTimeout(() => {
      setLoading(false);
      setFormValues({ ...initailObject });
      // toast.success("Data has been Submitted Successfully!");
      pdfDownloadLink.current.click(); // Simulate click to download PDF
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, email, phone } = formValues;
    const errors = {};
    if (!first_name) {
      errors.first_name = "Please Enter First Name.";
    } else if (!last_name) {
      errors.last_name = "Please Enter Last Name.";
    } else if (!mobileValue) {
      errors.phone = "Please Enter Phone Number.";
    } else if (!email) {
      errors.email = "Please Enter Email.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address.";
    } else if (!captchaToken) {
      errors.captcha = "Please complete the CAPTCHA.";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setLoading(false);
      return;
    }

    let updatedData = { ...formValues };
    setLoading(true);

    PostFormContactFormData(updatedData);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="md"
      centered
      className="brochure-form-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Download Brochure</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="brochure_form_sec">
          <p className="para_comm">Fill the below form to get your copy.</p>
          <Row className="g-0 gx-lg-2">
            <Col lg={6}>
              <Form.Group controlId="first_name" className="mb-3">
                <Form.Control
                  type="text"
                  name="first_name"
                  value={formValues.first_name}
                  onChange={handleInputChange}
                  placeholder="First Name"
                />
                <p className="mt-2 form_error_msg">{errors?.first_name}</p>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group controlId="last_name" className="mb-3">
                <Form.Control
                  type="text"
                  name="last_name"
                  value={formValues.last_name}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                />
                <p className="mt-2 form_error_msg">{errors?.last_name}</p>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <div className="mb-3">
                <PhoneInput
                  country="in"
                  value={mobileValue}
                  onChange={setMobileValue}
                  enableSearch={true}
                  disableSearchIcon={true}
                />
                <p className="mt-2 form_error_msg">{errors?.phone}</p>
              </div>
            </Col>
            <Col lg={6}>
              <Form.Group controlId="email" className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
                <p className="mt-2 form_error_msg">{errors?.email}</p>
              </Form.Group>
            </Col>
          </Row>

          {/* Google reCAPTCHA */}
          <div className="mb-4">
            <ReCAPTCHA
              sitekey="6LetJTcqAAAAANWLtBjs1VFwsWNuZwGlnXC0Cice" // Add your site key here
              onChange={onCaptchaChange}
            />
            <p className="mt-2 form_error_msg">{errors?.captcha}</p>
          </div>

          <div className="text-center">
            <Button
              className="theme_btn2"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? "downloading..." : "Download"}
            </Button>
          </div>

          {/* Hidden link for PDF download */}
          <a
            ref={pdfDownloadLink}
            href={
              brochureLink
                ? brochureLink
                : "https://newedge-realty.prismcloudhosting.com/Newedge_Profile_2023.pdf"
            }
            download="Brochure.pdf"
            style={{ display: "none" }}
          >
            Download Brochure
          </a>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BrochureForm;
