"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button, Col, Modal, Form, Row } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA
// data
import projectsData from "../../../db/projectsData";
// css
import "./styles.scss";

// min max prices Rent

const minBudgetData = ["50 lac", "2 Cr", "5 Cr", "10 Cr", "15 Cr"];

const maxBudgetData = ["50 lac", "2 Cr", "5 Cr", "10 Cr", "15 Cr"];

const initailObject = {
  first_name: "",
  last_name: "",
  company_name: "",
  phone: "",
  email: "",
  property: "",
  min_budget: "",
  max_budget: "",
  message: "",
};
const ProjectForm = ({ show, handleClose }) => {
  const { id } = useParams();
  const [propertyData, setPropertyData] = useState(projectsData);
  const [formValues, setFormValues] = useState(initailObject);
  const [loading, setLoading] = useState(false);
  const [mobileValue, setMobileValue] = useState("");
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null); // Store reCAPTCHA token
  const [filteredMaxBudgetData, setFilteredMaxBudgetData] =
    useState(maxBudgetData);

  useEffect(() => {
    setPropertyData(projectsData);
  }, []);

  useEffect(() => {
    if (id && propertyData.length > 0) {
      const selectedProperty = propertyData.find(
        (property) => property.route === id
      );
      if (selectedProperty) {
        setFormValues((prev) => ({
          ...prev,
          property: selectedProperty.title,
        }));
      }
    }
  }, [id, propertyData]);

  const convertToNumber = (value) => {
    if (value.includes("lac")) {
      return parseFloat(value) * 100000;
    } else if (value.includes("Cr")) {
      return parseFloat(value) * 10000000;
    }
    return 0;
  };

  useEffect(() => {
    const minBudgetNumeric = convertToNumber(formValues.min_budget);

    const filteredData = maxBudgetData.filter(
      (val) => convertToNumber(val) > minBudgetNumeric
    );
    setFilteredMaxBudgetData(filteredData);
  }, [formValues.min_budget]);

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
    // try {
    const payload = {
      first_name: updatedData?.first_name,
      last_name: updatedData?.last_name,
      company_name: updatedData?.company_name,
      phone: updatedData?.phone,
      email: updatedData?.email,
      property: updatedData?.property,
      min_budget: updatedData?.min_budget,
      max_budget: updatedData?.max_budget,
      message: updatedData?.message,
    };

    // const response = await postContactUs(payload);
    // if (response.status === 200 || response.status === 201) {
    setTimeout(() => {
      setLoading(false);
      setFormValues({ ...initailObject });
      toast.success("Data has been Submitted Successfully!");
    }, 1000);
    //   }
    // } catch (error) {
    //   console.error("Error posting Data:", error);
    //   setLoading(false);
    //   toast.error("Something Went wrong!");
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      company_name,
      email,
      phone,
      property,
      min_budget,
      max_budget,
      message,
    } = formValues;
    const errors = {};
    if (!first_name) {
      errors.first_name = "Please Enter First Name.";
    } else if (!last_name) {
      errors.last_name = "Please Enter Last Name.";
    } else if (!company_name) {
      errors.company_name = "Please Enter Company Name.";
    } else if (!mobileValue) {
      errors.phone = "Please Enter Phone Number.";
    } else if (!email) {
      errors.email = "Please Enter Email.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address.";
    } else if (!property) {
      errors.property = "Please Select Property.";
    } else if (!min_budget) {
      errors.min_budget = "Please Select Min. Budget.";
    } else if (!max_budget) {
      errors.max_budget = "Please Select Max. Budget.";
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
      className="proj-form-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Rent/Buy Property</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="proj_form_sec">
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
            <Col lg={12}>
              <Form.Group controlId="company_name" className="mb-3">
                <Form.Control
                  type="text"
                  name="company_name"
                  value={formValues.company_name}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                />
                <p className="mt-2 form_error_msg">{errors?.company_name}</p>
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
              <Form.Group controlId="property" className="mb-3">
                <Form.Select
                  name="property"
                  value={formValues.property}
                  onChange={handleInputChange}
                  disabled={!!formValues.property}
                >
                  <option value="" disabled>
                    Property
                  </option>
                  {propertyData?.map((property, i) => (
                    <option key={"pro" + i} value={property?.title}>
                      {property?.title}
                    </option>
                  ))}
                </Form.Select>
                <p className="mt-2 form_error_msg">{errors?.property}</p>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group controlId="min_budget" className="mb-3">
                <Form.Select
                  name="min_budget"
                  value={formValues.min_budget}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Min. Budget
                  </option>
                  {minBudgetData?.map((val, i) => (
                    <option key={"min" + i} value={val}>
                      {val} ₹
                    </option>
                  ))}
                </Form.Select>
                <p className="mt-2 form_error_msg">{errors?.min_budget}</p>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group controlId="max_budget" className="mb-3">
                <Form.Select
                  name="max_budget"
                  value={formValues.max_budget}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Max. Budget
                  </option>
                  {filteredMaxBudgetData?.map((val, i) => (
                    <option key={"max" + i} value={val}>
                      {val} ₹
                    </option>
                  ))}
                </Form.Select>
                <p className="mt-2 form_error_msg">{errors?.max_budget}</p>
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

export default ProjectForm;
