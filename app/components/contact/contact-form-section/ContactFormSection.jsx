import Image from "next/image";
import { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA
import contactImg from "../../../assets/contact/contactImg.webp";
// api
import { postLeadForm } from "../../../apis/commonApi";
// data
import { citiesData } from "../../../db/citiesData";
// css
import "./style.scss";

// Set max visible options
const maxVisibleOptions = 5;

// min max prices

const minBudgetData = [
  {
    name: "50 lac",
    value: 5000000,
  },
  {
    name: "2 Cr",
    value: 20000000,
  },
  {
    name: "5 Cr",
    value: 50000000,
  },
  {
    name: "10 Cr",
    value: 100000000,
  },
  {
    name: "15 Cr",
    value: 150000000,
  },
];

const maxBudgetData = [
  {
    name: "50 lac",
    value: 5000000,
  },
  {
    name: "2 Cr",
    value: 20000000,
  },
  {
    name: "5 Cr",
    value: 50000000,
  },
  {
    name: "10 Cr",
    value: 100000000,
  },
  {
    name: "15 Cr",
    value: 150000000,
  },
];

const initailObject = {
  first_name: "",
  last_name: "",
  email: "",
  company: "",
  phone: "",
  city_name: "",
  min_budget: "",
  max_budget: "",
  recordType: "",
  lead_source: "Website",
};

const ContactFormSection = () => {
  const [formValues, setFormValues] = useState(initailObject);
  const [loading, setLoading] = useState(false);
  const [mobileValue, setMobileValue] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null); // Store reCAPTCHA token
  const [filteredMaxBudgetData, setFilteredMaxBudgetData] =
    useState(maxBudgetData);

  // Populate the cityOptions in the required format for react-select
  useEffect(() => {
    const options = citiesData.map((city, i) => ({
      value: city,
      label: city,
    }));
    setCityOptions(options);
  }, []);

  useEffect(() => {
    const minBudgetNumeric = Number(
      formValues.min_budget ? formValues.min_budget : 5000000
    );
    const filteredData = maxBudgetData.filter(
      (val) => Number(val?.value) > minBudgetNumeric
    );
    setFilteredMaxBudgetData(filteredData);
  }, [formValues.min_budget]);

  // Handle city selection
  const handleCityChange = (selectedOption) => {
    setFormValues({
      ...formValues,
      city_name: selectedOption ? selectedOption.value : "",
    });
    setErrors({ ...errors, city_name: "" });
  };

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

  const PostLeadFormData = async (updatedData, form) => {
    try {
      const payload = {
        first_name: updatedData?.first_name,
        last_name: updatedData?.last_name,
        email: updatedData?.email,
        company: updatedData?.company,
        phone: updatedData?.phone,
        city_name: updatedData?.city_name,
        min_budget: parseFloat(updatedData?.min_budget).toFixed(2),
        max_budget: parseFloat(updatedData?.max_budget).toFixed(2),
        recordType: updatedData?.recordType,
      };

      const response = await postLeadForm(payload);
      if (response.status === 200 || response.status === 201) {
        // Submit to Salesforce Web-to-Lead form
        form.submit();
        setLoading(false);
        setFormValues({ ...initailObject });
      }
    } catch (error) {
      console.error("Error posting Data:", error);
      setLoading(false);
      toast.error("Something Went wrong!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      company,
      city_name,
      min_budget,
      max_budget,
      recordType,
    } = formValues;
    const errors = {};
    if (!first_name) {
      errors.first_name = "Please Enter First Name.";
    } else if (!last_name) {
      errors.last_name = "Please Enter Last Name.";
    } else if (!email) {
      errors.email = "Please Enter Email.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address.";
    } else if (!company) {
      errors.company = "Please Enter Company Name.";
    } else if (!mobileValue) {
      errors.phone = "Please Enter Phone Number.";
    } else if (!city_name) {
      errors.city_name = "Please Enter City.";
    } else if (!min_budget) {
      errors.min_budget = "Please Select Min. Budget.";
    } else if (!max_budget) {
      errors.max_budget = "Please Select Max. Budget.";
    } else if (!recordType) {
      errors.recordType = "Please Select Type of Property.";
    } else if (!captchaToken) {
      errors.captcha = "Please Complete the CAPTCHA.";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setLoading(false);
      return;
    }

    const form = e.target;
    let updatedData = { ...formValues, phone: mobileValue };
    setLoading(true);
    PostLeadFormData(updatedData, form);
  };

  return (
    <div className="contact-form-area mt-60">
      <Container>
        <Row className="gx-lg-5 gy-5 gy-lg-0">
          <Col lg={6} className="order-last order-lg-first">
            <Form
              action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D9I0000016bIr"
              method="POST"
              className="contact_form_wrap"
              onSubmit={handleSubmit}
            >
              <p className="para_comm">Fill the below form to contact us:</p>
              {/* Hidden Salesforce fields */}
              <input type="hidden" name="oid" value="00D9I0000016bIr" />
              <input
                type="hidden"
                name="retURL"
                value="https://newedge-realty-next.vercel.app/thankyou.html"
              />
              {/* <input type="hidden" name="debug" value="1" />
      <input type="hidden" name="debugEmail" value="chetan@newedgerealty.in" /> */}
              <input
                type="hidden"
                id="lead_source"
                name="lead_source"
                value="Website"
              />
              {/* Hidden field to pass  values */}
              <input
                type="hidden"
                id="phone"
                name="phone"
                value={mobileValue}
              />
              <input
                type="hidden"
                id="city"
                name="city"
                value={formValues?.city_name}
              />
              <input
                type="hidden"
                id="00N9I000000s4oD"
                name="00N9I000000s4oD"
                value={formValues?.min_budget}
              />
              <input
                type="hidden"
                id="00N9I000000s4pp"
                name="00N9I000000s4pp"
                value={formValues?.max_budget}
              />
              <input
                type="hidden"
                id="00N9I000000vPGD"
                name="00N9I000000vPGD"
                value={formValues?.recordType}
              />
              <Row className="g-0 gx-md-2 gx-lg-2">
                <Col md={6} lg={6}>
                  <Form.Group controlId="first_name" className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      id="first_name"
                      name="first_name"
                      value={formValues.first_name}
                      onChange={handleInputChange}
                    />
                    <p className="mt-2 form_error_msg">{errors?.first_name}</p>
                  </Form.Group>
                </Col>
                <Col md={6} lg={6}>
                  <Form.Group controlId="last_name" className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      id="last_name"
                      name="last_name"
                      value={formValues.last_name}
                      onChange={handleInputChange}
                    />
                    <p className="mt-2 form_error_msg">{errors?.last_name}</p>
                  </Form.Group>
                </Col>
                <Col md={6} lg={6}>
                  <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      id="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                    />
                    <p className="mt-2 form_error_msg">{errors?.email}</p>
                  </Form.Group>
                </Col>
                <Col md={6} lg={6}>
                  <Form.Group controlId="company" className="mb-3">
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                      type="text"
                      id="company"
                      name="company"
                      value={formValues.company}
                      onChange={handleInputChange}
                    />
                    <p className="mt-2 form_error_msg">{errors?.company}</p>
                  </Form.Group>
                </Col>
                <Col md={6} lg={6}>
                  <Form.Group controlId="phone" className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <PhoneInput
                      country="in"
                      value={mobileValue}
                      onChange={setMobileValue}
                      enableSearch={true}
                      disableSearchIcon={true}
                    />
                    <p className="mt-2 form_error_msg">{errors?.phone}</p>
                  </Form.Group>
                </Col>
                <Col md={6} lg={6}>
                  <Form.Group controlId="city_name" className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Select
                      id="city_name"
                      name="city_name"
                      options={cityOptions} // Pass city options
                      value={cityOptions.find(
                        (option) => option.value === formValues.city_name
                      )}
                      onChange={handleCityChange}
                      placeholder="Select..."
                      isSearchable
                      maxMenuHeight={maxVisibleOptions * 40} // Limit visible options and add scroll
                      className="react-select"
                    />
                    <p className="mt-2 form_error_msg">{errors?.city_name}</p>
                  </Form.Group>
                </Col>
                <Col md={6} lg={6}>
                  <Form.Group controlId="min_budget" className="mb-3">
                    <Form.Label>Min. Budget</Form.Label>
                    <Form.Select
                      id="min_budget"
                      name="min_budget"
                      value={formValues.min_budget}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      {minBudgetData?.map((val, i) => (
                        <option key={"min" + i} value={val?.value}>
                          {val?.name} ₹
                        </option>
                      ))}
                    </Form.Select>
                    <p className="mt-2 form_error_msg">{errors?.min_budget}</p>
                  </Form.Group>
                </Col>
                <Col md={6} lg={6}>
                  <Form.Group controlId="max_budget" className="mb-3">
                    <Form.Label>Max. Budget</Form.Label>
                    <Form.Select
                      id="max_budget"
                      name="max_budget"
                      value={formValues.max_budget}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      {filteredMaxBudgetData?.map((val, i) => (
                        <option key={"max" + i} value={val?.value}>
                          {val?.name} ₹
                        </option>
                      ))}
                    </Form.Select>
                    <p className="mt-2 form_error_msg">{errors?.max_budget}</p>
                  </Form.Group>
                </Col>
                <Col lg={12}>
                  <Form.Group controlId="recordType" className="mb-3">
                    <Form.Label>Type of Property</Form.Label>
                    <Form.Select
                      id="recordType"
                      name="recordType"
                      value={formValues.recordType}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      <option value="Commercial">Commercial</option>
                      <option value="Farm_House">Farm House</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Pre_leased_Property">
                        Pre-Leased Property
                      </option>
                      <option value="Land">Land</option>
                      <option value="Residential">Residential</option>
                    </Form.Select>
                    <p className="mt-2 form_error_msg">{errors?.recordType}</p>
                  </Form.Group>
                </Col>
                {/* Google reCAPTCHA */}
                <Col sm={12}>
                  <div className="mb-4">
                    <ReCAPTCHA
                      sitekey="6LcV_WoqAAAAAF1KC63Gc6Rk0dYnogvW_4uiwe_w" // Add your site key here
                      onChange={onCaptchaChange}
                    />
                    <p className="mt-2 form_error_msg">{errors?.captcha}</p>
                  </div>
                </Col>
                <Col sm={12}>
                  <Button
                    className="theme_btn2"
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col lg={6}>
            <figure>
              <Image
                src={contactImg}
                layout="fill"
                objectFit="cover"
                alt="Real Estate Office Contact India | Newedge Realty"
                title="Contact | Contact Real Estate Agents India | Newedge Realty"
              />
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactFormSection;
