import { Container } from "react-bootstrap";
// css
import "./styles.scss";

const RefundIntro = () => {
  return (
    <div className="refund_intro_sec mt-60">
      <Container>
        <span className="tag_line">Policy</span>
        <h2 className="main_sec_heading">Cancellation & Refund Policy</h2>
        <div className="content_wrap">
          <h3>The prohibition of cancellations and forfeiture</h3>
          <p>
            By accepting this application, you are aware that the Provisional
            Reservation cannot be canceled. You also do not have the right to a
            refund of the Provisional Allotment Money. However, if cancellations
            are made for reasons that may be attributed to you, including
          </p>
          <ul>
            <li>
              Not adhering to terms and conditions as stated in this application
              or the Agreement for Sale.
            </li>
            <li>
              Failure to sign the Agreement for Sale within thirty (30) days
              from notification by NewEdge Realty
            </li>
            <li>
              Commencing a move-out request, NewEdge Realty may retain the
              earnest money as cancellation charges and resale the flat without
              refunding any remaining balance.
            </li>
            <li>
              Any refunds will depend on whether another buyer is found for that
              particular unit, and funds from such resales can only be used for
              this purpose.
            </li>
          </ul>

          <h3>Withdrawal or Surrender of Application</h3>
          <p>
            In case the applicant withdraws or surrenders his or her application
            at any time for any reason. In that case, NewEdge Realty shall be
            entitled to forfeit such amounts as have been received up to earnest
            money, together with any accrued interest or taxes and other costs
            relating to it.
          </p>
          <p>
            The remaining funds will be refunded to the applicant after
            deducting forfeited amounts based on the builders prevailing
            cancellation policy. Refunds will normally occur in about 45-90 days
            in cheque form without payment of interest or compensation when the
            unit has been allocated to another applicant.
          </p>
          <h3>Payment Default and Cancellation</h3>
          <p>
            The payment of installments and other charges associated with the
            booking/allotment terms is critical. NewEdge Realty may cancel the
            allotment at its discretion if you infringe on any terms and
            conditions of this booking form including payment terms. In such
            cases, the earnest money will be forfeited together with any unpaid
            installments and interest on late payments.
          </p>
          <p>
            Without interest, the balance amount will be refunded after
            reassigning the unit to another applicant and complying with the
            necessary formalities. NewEdge Realty may, at its discretion, waive
            the delay by charging penal interest as per RERA (Real Estate
            Regulatory Authority) guidelines or the Lending Rate of SBI plus 2%.
          </p>
          <h3>Contact Information</h3>
          <p>NewEdge Realty</p>
          <p>
            212-214, Platinum Plaza, Opp. I.O.C. Petrol Pump, Bodakdev,
            Ahmedabad-380054, Gujarat, India
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+917940307106">+91 79 4030 7106</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@newedgerealty.in">info@newedgerealty.in</a>
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href="www.newedgerealty.in" target="_blank">
              www.newedgerealty.in
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default RefundIntro;
