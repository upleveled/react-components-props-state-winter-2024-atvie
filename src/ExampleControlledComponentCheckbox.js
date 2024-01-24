// 1. Create state variable
// 2. Connect the state variable to the form fields
// 3. Update the values of the state variables based on user input

import { useState } from 'react';

export default function ExampleControlledComponentCheckbox() {
  // 1. Create state variable
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);
  return (
    <form>
      <h2>Cookie policy accepted?</h2>
      <div>Boolean: {JSON.stringify(isCookieAccepted)}</div>
      <label>
        <input
          type="checkbox"
          // 2. Connect the state variable to the form fields
          checked={isCookieAccepted}
          // 3. Update the values of the state variables based on user input
          onChange={(event) => setIsCookieAccepted(event.currentTarget.checked)}
        />
        Accept Cookie Policy
      </label>
    </form>
  );
}
