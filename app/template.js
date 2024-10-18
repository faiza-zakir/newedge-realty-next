"use client";
import { useState, useEffect } from "react";
import Loader from "./components/common/loader/Loader";
import Navbar from "./components/layout/navbar-section/Navbar";
import FloatingIcon from "./components/common/floating-icon/FloatingIcon";
import Footer from "./components/layout/footer-section/Footer";

export default function Template({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="layout-container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main>{children}</main>
          <FloatingIcon />
          <Footer />
        </>
      )}
    </div>
  );
}
