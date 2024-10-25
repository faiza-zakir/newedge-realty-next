import { Container, Modal } from "react-bootstrap";
// css
import "./styles.scss";

const TaglinePopup = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="md"
      centered
      className="tagline-modal"
    >
      <Modal.Header closeButton>
        {/* <Modal.Title>Main Line</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <Container>
          <p className="sub_heading">
            We aim to achieve 2000 happy customers by 2030 because real estate
            investment is a critical life decision, and everyone deserves to
            secure their lifelong earnings in the right property.
          </p>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default TaglinePopup;
