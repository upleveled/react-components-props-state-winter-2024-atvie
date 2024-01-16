import { useState } from 'react';

export default function ExampleConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {/* Conditional Rendering with Ternary Operator */}
      <div>{isLoggedIn ? <p>Welcome</p> : <p>Please log in</p>}</div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
      <hr />
      {/* Conditional Rendering with Boolean Operator */}
      <div>{isVisible && <div>State variable is true</div>}</div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Button</button>
    </>
  );
}
