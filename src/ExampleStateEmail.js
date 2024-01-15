import { useState } from 'react';

export default function ExampleStateEmail() {
  // 1. Create state variable
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  return (
    <>
      {/* 2. Display state variable */}
      <h2>
        {email} {name}
      </h2>
      <input
        // 3. use state variable as value
        value={email}
        onChange={(event) => {
          // 4. Update state variable
          setEmail(event.currentTarget.value);
        }}
      />
      <input
        // 3. use state variable as value
        value={name}
        onChange={(event) => {
          // 4. Update state variable
          setName(event.currentTarget.value);
        }}
      />
    </>
  );
}
