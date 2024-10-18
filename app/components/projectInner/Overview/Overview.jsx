import { Container } from "react-bootstrap";
import { FaBath, FaBed, FaChartArea } from "react-icons/fa";
import { PiLineVertical } from "react-icons/pi";
// css
import "./styles.scss";

const Overview = ({ singleProject }) => {
  return (
    <div className="overview_sec mt-60">
      <Container>
        <div className="overview_wrap">
          <div>
            <h2 className="main_sec_heading">{singleProject?.title}</h2>
            <ul>
              <li>
                {singleProject?.location?.title},{" "}
                {singleProject?.location?.zone?.title}
              </li>
              <li>
                <PiLineVertical />
              </li>
              <li>For Rent</li>
              <li>
                <PiLineVertical />
              </li>
              <li>2 Years Ago</li>
            </ul>
            <ul>
              <li>
                <FaBed /> 2 bed
              </li>
              <li>
                <FaBath /> 1 bath
              </li>
              <li>
                <FaChartArea /> 1200sqft
              </li>
            </ul>
          </div>
          <div className="price_wrap">
            <h4>
              <span>Starting from</span> ₹{singleProject?.price}
            </h4>
            <p className="para_comm mb-3">₹ 4,200/Sq-ft</p>
            <p className="para_comm">RERA No. PBRERA-ASR03-PR0498</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Overview;
