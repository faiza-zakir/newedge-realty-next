import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
// data
import zoneData from "../../../db/zoneData";
// css
import "./styles.scss";

function FilterSection({ onFilterChange }) {
  const [selectedZone, setSelectedZone] = useState(zoneData[0]?.route || "");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [type, setType] = useState("");
  const [locations, setLocations] = useState(zoneData[0]?.locations || []);

  useEffect(() => {
    // Set locations based on the default selected zone (first zone)
    if (zoneData[0]) {
      setLocations(zoneData[0].locations);
    }
  }, []);

  const handleZoneChange = (e) => {
    const zoneRoute = e.target.value;
    setSelectedZone(zoneRoute);

    // Find the zone data based on the selected title
    const zone = zoneData.find((zone) => zone.route === zoneRoute);

    // Reset the selected location & type when the zone changes
    setSelectedLocation("");
    setType("");

    // Set the locations state based on the selected zone
    if (zone && zone.locations.length > 0) {
      setLocations(zone.locations);
    } else {
      setLocations([]); // No locations available for this zone
    }
  };

  const handleApplyFilters = () => {
    onFilterChange({
      type,
      zone: selectedZone,
      location: selectedLocation,
    });
  };

  return (
    <div className="location_filter_sec mt-60">
      <div className="container">
        <div className="filter_wrap">
          <div className="zone_wrap">
            <span className="main-label">Filter</span>
            <Form.Select
              aria-label="Zone"
              onChange={handleZoneChange}
              value={selectedZone}
            >
              <option value="" disabled>
                Zone
              </option>
              {zoneData?.map((zone) => (
                <option key={zone?.id} value={zone?.route}>
                  {zone?.title}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="d-flex align-items-center gap-3 w-100">
            <Form.Select
              aria-label="Location"
              onChange={(e) => setSelectedLocation(e.target.value)}
              value={selectedLocation}
            >
              <option value="" disabled>
                {locations.length > 0 ? "Location" : "No Locations available"}
              </option>
              {locations.length > 0 &&
                locations.map((location) => (
                  <option key={location.id} value={location.route}>
                    {location.title}
                  </option>
                ))}
            </Form.Select>
          </div>
          <div className="d-flex align-items-center gap-3 w-100">
            <Form.Select
              aria-label="Location"
              onChange={(e) => setType(e.target.value)}
              value={type}
            >
              <option value="" disabled>
                Category
              </option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="pre-leased">Pre-Leased</option>
              <option value="industrial">Industrial</option>
              <option value="farmhouse">Farmhouse</option>
              <option value="land">Land</option>
            </Form.Select>
          </div>
          <button className="theme_btn2" onClick={handleApplyFilters}>
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
