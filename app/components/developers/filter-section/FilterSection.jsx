import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
// data
import zoneData from "../../../db/zoneData";
// css
import "./styles.scss";

function FilterSection() {
  return (
    <div className="developer_filter_sec mt-60">
      <div className="container">
        <div className="filter_wrap">
          <div className="zone_wrap">
            <span className="main-label">Filter</span>
            <Form.Select aria-label="Location">
              <option value="">Location</option>
              {zoneData?.map((zone) => (
                <option key={zone?.id} value={zone?.title}>
                  {zone?.title}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="d-flex align-items-center gap-3 w-100">
            <Form.Select aria-label="Location">
              <option>Developer</option>
              <option value="Developer 1">Developer 1</option>
              <option value="Developer 2">Developer 2</option>
              <option value="Developer 3">Developer 3</option>
              <option value="Developer 4">Developer 4</option>
            </Form.Select>
          </div>
          <div className="d-flex align-items-center gap-3 w-100">
            <Form.Select aria-label="Location">
              <option>Project</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="pre-leased">Pre-Leased</option>
              <option value="industrial">Industrial</option>
              <option value="farmhouse">Farmhouse</option>
              <option value="land">Land</option>
            </Form.Select>
          </div>
          <button className="theme_btn2">
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
