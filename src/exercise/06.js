// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  /*
Basic exercise ==>
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.usernameInput.value;
    onSubmitUsername(inputValue);
  };

  <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
*/

  /*
Extra credit 1 ==>
  const inputValueRef = React.useRef(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(inputValueRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={inputValueRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
*/

  /*
Extra credit 2 ==>
  const [error, setError] = React.useState(null);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const isValid = inputValue === inputValue.toLowerCase();
    setError(isValid ? null : 'Username must be lowercase');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.usernameInput.value;
    onSubmitUsername(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} />
      </div>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  );
}
*/
  const [error, setError] = React.useState(null);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const isValid = inputValue === inputValue.toLowerCase();
    setError(isValid ? null : 'Username must be lowercase');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.usernameInput.value;
    onSubmitUsername(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} />
      </div>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;
