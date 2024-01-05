

import React, { useEffect } from 'react';

const BackBtnaction = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = "Are you sure you want to leave? Your changes may not be saved.";
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Cleanup: Remove the event listener when the component is unmounted
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <p>This is a component with a confirmation message for leaving the page.</p>
    </div>
  );
};

export default BackBtnaction;
