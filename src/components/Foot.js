import React, { useEffect, useState, useRef } from 'react';

const CenteredText = () => {
  const [isInView, setIsInView] = useState(false);
  const [scrollYValue, setScrollYValue] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollYValue(scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); // Disconnect the observer once in view
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '3rem',
        opacity: isInView ? 1 : 0,
        transform: `translateY(${isInView ? 0 : '1rem'})`,
        transition: 'transform 3s, opacity 3s',
      }}
      ref={containerRef}
    >
      <div>Hello</div>
      <div>Everyone</div>
      <div>ScrollY Value: {scrollYValue}</div>
    </div>
  );
};

export default CenteredText;