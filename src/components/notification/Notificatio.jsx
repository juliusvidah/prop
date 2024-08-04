import React, { useEffect } from 'react';

const Notification = () => {
  useEffect(() => {
    // Function to show a notification
    const showNotification = () => {
      alert('There is a new property for sale in your area!');
    };

    // Set an interval to show the notification every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(showNotification, 30000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <div>
      {/* <h1>Notification Pop-up Example</h1>
      <p>Notifications will pop up every 5 seconds.</p> */}
    </div>
  );
};

export default Notification;