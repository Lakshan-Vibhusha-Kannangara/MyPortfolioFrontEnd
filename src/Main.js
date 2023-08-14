import React from 'react';
import App from './App'; // Import the App component

function Main() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '100%',
        margin: '0',
        padding: '0',
        position: 'relative',
      }}
    >
      <App /> {/* Include the App component */}
    </div>
  );
}

export default Main;
