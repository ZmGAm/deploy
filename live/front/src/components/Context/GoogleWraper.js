
import React, { useEffect } from 'react';

const GoogleWraper = ({ children }) => {
  useEffect(() => {
    // Load Google Maps API script
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAoJwUr3rjwlC4FgP7eDnU6OpvQkzmCj-8';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up: Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return <>{children}</>;
};

export default GoogleWraper;
