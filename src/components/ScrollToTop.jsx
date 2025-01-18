import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple hover:bg-pink p-3 rounded-full text-white transition-all duration-300 z-50"
        >
          <IoIosArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 