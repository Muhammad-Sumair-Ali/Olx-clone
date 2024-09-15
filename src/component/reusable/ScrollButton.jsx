import React, { useState, useEffect } from "react";
import './Scrollbtn.css';
const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 900) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      {showButton && (
        <button className="btn-danger arrow-up-btn" onClick={scrollToTop}>
          <i className="fa fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
