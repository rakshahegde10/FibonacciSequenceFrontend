import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        e.preventDefault();

        try {
          // Check if the input is a valid integer
          const isValidInteger = /^\d+$/.test(inputValue) && parseInt(inputValue) >= 0;;

          if (isValidInteger) {
            const response = await axios.post('http://localhost:5000/api/fibonacci/', {
              inputNumber: parseInt(inputValue),
            });
            navigate('/results', { state: { message: response.data.fibonacciNumbers, num: parseInt(inputValue) } });
          } else {
            setErrorMessage('Please enter a valid integer (no decimals or characters or negative integers).');
          }
        } catch (error) {
          console.error('Error submitting Fibonacci request:', error);
        }

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