"use client";
import { useState } from "react";
import { Button, Col, Modal, Form, Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA
// css
import "./styles.scss";
import { postDeveloperContact } from "@/app/apis/commonApi";

const initailObject = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  message: "",
};
const DevContactForm = ({ show, handleClose }) => {
  const [formValues, setFormValues] = useState(initailObject);
  const [loading, setLoading] = useState(false);
  const [mobileValue, setMobileValue] = useState("");
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null); // Store reCAPTCHA token

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    // Clear error message when user starts typing again
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
    setErrors({ ...errors, captcha: "" }); // Clear CAPTCHA error on success
  };

  const PostFormContactFormData = async (updatedData) => {
    const payload = {
      first_name: updatedData?.first_name,
      last_name: updatedData?.last_name,
      phone: updatedData?.phone,
      email: updatedData?.email,
      message: updatedData?.message,
    };

    try {
      const response = await postDeveloperContact(payload);
      console.log("🚀 ~ PostFormContactFormData ~ response:", response);
      if (response?.status == 200 || response?.status == 201) {
        setLoading(false);
        setFormValues({ ...initailObject });
        toast.success("Data Submitted Successfully!");
      }
    } catch (err) {
      setLoading(false);
      console.error("Error contact form:", err);
      toast.error("Something Went wrong!");
    }

    // if (response.status === 200 || response.status === 201) {
    // setTimeout(() => {
    //   setLoading(false);
    //   setFormValues({ ...initailObject });
    //   toast.success("Data has been Submitted Successfully!");
    // }, 1000);
    //   }
    // } catch (error) {
    //   console.error("Error posting Data:", error);
    //   setLoading(false);
    //   toast.error("Something Went wrong!");
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, email, phone, message } = formValues;
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
    } else if (!message) {
      errors.message = "Please Enter Message.";
    } else if (!captchaToken) {
      errors.captcha = "Please complete the CAPTCHA.";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setLoading(false);
      return;
    }

    let updatedData = { ...formValues };
    updatedData.phone = mobileValue;
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
      className="dev-contact-form-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="dev_form_sec">
          <p className="para_comm">Fill the below form to contact us:</p>
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
            <Col lg={12}>
              <Form.Group controlId="message" className="mb-3">
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={4}
                  style={{ resize: "none" }}
                />
                <p className="mt-2 form_error_msg">{errors?.message}</p>
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
              {loading ? "Sending..." : "Submit"}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default DevContactForm;
