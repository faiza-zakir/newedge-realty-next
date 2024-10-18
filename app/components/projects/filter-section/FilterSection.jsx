"use client";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
// data
import zoneData from "../../../db/zoneData";
// css
import "./styles.scss";

function FilterSection({ onFilterChange }) {
  const [price, setPrice] = useState(5000000);
  const [selectedLocation, setSelectedLocation] = useState("");

  // useEffect(() => {
  //   const rangeInput = document.querySelector(
  //     ".price_wrap input[type='range']"
  //   );
  //   const min = 5000000;
  //   const max = 150000000;
  //   const value = ((price - min) / (max - min)) * 100; // Calculate percentage

  //   // Apply gradient background to the slider
  //   if (rangeInput) {
  //     rangeInput.style.background = `linear-gradient(to right, #000 ${value}%, #e9ecef ${value}%)`;
  //   }
  // }, [price]);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const formatPrice = (value) => {
    if (value >= 10000000) {
      return (value / 10000000).toFixed(1) + "Cr"; // Convert to crores
    } else if (value >= 100000) {
      return (value / 100000).toFixed(1) + "L"; // Convert to lakhs
    }
    return value;
  };

  const handleApplyFilters = () => {
    onFilterChange({
      location: selectedLocation,
      price: price,
    });
  };

  return (
    <div className="project_filter_sec mt-60">
      <div className="container">
        <div className="filter_wrap">
          <div className="zone_wrap">
            <span className="main-label">Filter</span>
            <Form.Select
              aria-label="Location"
              onChange={(e) => setSelectedLocation(e.target.value)}
              value={selectedLocation}
            >
              <option value="">Location</option>
              {zoneData?.map((zone) => (
                <option key={zone?.id} value={zone?.route}>
                  {zone?.title}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="d-flex align-items-center gap-3 price_wrap w-100">
            <span className="sub-label">Price</span>
            <Form.Range
              min={5000000}
              max={150000000}
              value={price}
              onChange={handlePriceChange}
            />
            <span className="sub-label">₹{formatPrice(price)}</span>
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
