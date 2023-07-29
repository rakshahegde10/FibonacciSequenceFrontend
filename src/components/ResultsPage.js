import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResultsPage.css';

const ResultsPage = () => {
  const location = useLocation();
  const { message, num } = location.state || {};
  const navigate = useNavigate();

  // Check if message is an array
  const messageList = Array.isArray(message) ? message : [];

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="result-page-container">
      <h2 className="heading">Fibonacci Sequence for the number {num}:</h2>

      {messageList.length > 0 ? (
        <div className="table-container">
          {/* comma-separated list */}
          <p>{messageList.join(', ')}</p>
        </div>
      ) : (
        <p>No Fibonacci Sequence found for the number {num}.</p>
      )}

      <button className="go-back-button" onClick={handleGoBack}>Go Back to Input Page</button>
    </div>
  );
};

export default ResultsPage;