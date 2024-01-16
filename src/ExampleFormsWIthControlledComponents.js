import { useState } from 'react';

export default function ExampleFormsWIthControlledComponents() {
  // 1. Create State Variable
  const [userNameInput, setUserNameInput] = useState('');
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        // 2. Connect the state variable to the input field
        value={userNameInput}
        // 3. Update the state with an OnChange event
        onChange={(event) => setUserNameInput(event.currentTarget.value)}
      />
      {/* 4. Display state */}
      <div>Name: {userNameInput}</div>
    </form>
  );
}
