# FibonacciSequenceFrontend

This is a simple React application that generates the Fibonacci sequence for a given positive integer.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Before you begin, make sure you have Node.js (which includes npm - Node Package Manager) installed on your computer. You can download the latest version from the official Node.js website (https://nodejs.org).
4. Install the dependencies using npm or yarn:

```
npm install
# or
yarn install
```

## How to Use

1. Run the development server:

```
npm start
# or
yarn start
```

2. Open your web browser and visit `http://localhost:3000`.

3. You will see a form titled "Fibonacci Number Generator."

4. Enter a positive integer in the input field and click the "Generate Fibonacci Sequence" button.

5. If you entered a valid integer, you will be redirected to the "Result Page," where you will see the Fibonacci sequence for the entered number.

6. If you encounter any errors, such as entering invalid input (decimals or characters), an error message will be displayed below the input field.

7. To try again, click the "Go Back to FormPage" button.

## Components

### App.js

This is the main component that sets up the routing for the application.

### FormPage.js

This component displays a form where the user can input a positive integer. When the form is submitted, it checks if the input is a valid integer and makes a POST request to the server to calculate the Fibonacci sequence for the entered number. If successful, the user is redirected to the "Result Page" with the Fibonacci sequence displayed. If there's an error, it shows an appropriate error message.

### ResultsPage.js

This component shows the generated Fibonacci sequence for the input number on the "FormPage." The user can click the "Go Back to FormPage" button to return to the input form.

## Dependencies

The application uses the following dependencies:

- React: A JavaScript library for building user interfaces.
- react-router-dom: A library for managing routing in a React application.
- axios: A promise-based HTTP client for making API requests.
