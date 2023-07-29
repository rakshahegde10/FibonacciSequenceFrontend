import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const { message, num } = location.state || {};

  const messageList = Array.isArray(message) ? message : []; //  // Check if message is an array

  return (
    <div>
      <h2>Fibonacci Sequence for the number {num}:</h2>

      {messageList.length > 0 ? (
        <div>
          {/* comma-separated list */}
          <p>{messageList.join(', ')}</p>
        </div>
      ) : (
        <p>No Fibonacci Sequence found for the number {num}.</p>
      )}
    </div>
  );
};

export default ResultPage;
