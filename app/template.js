"use client";
import { useState, useEffect } from "react";
import Loader from "./components/common/loader/Loader";
import Navbar from "./components/layout/navbar-section/Navbar";
import FloatingIcon from "./components/common/floating-icon/FloatingIcon";
import Footer from "./components/layout/footer-section/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
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
