import React, { useEffect, useRef } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const AnimatedTimelineElement = (props) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  // Pass the ref directly to the element that needs to be observed.
  return <VerticalTimelineElement {...props} ref={elementRef} />;
};

export default AnimatedTimelineElement;
