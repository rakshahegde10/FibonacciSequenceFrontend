import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setErrorMessage('');
      };

    const handleSubmit = async (e) => {
      navigate('/results')

      };

    return (
        <div>
          <h1>Fibonacci Number Generator</h1>
          <form onSubmit={handleSubmit}>
          <div>
            <label>
              Enter a number:
            </label>
              <input type="text" value={inputValue} onChange={handleChange} />
          </div>
            <button type="submit">Submit</button>
            {errorMessage && <p>{errorMessage}</p>}
          </form>
        </div>
      );
    };

export default FormPage;