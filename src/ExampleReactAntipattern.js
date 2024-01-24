import { useState } from 'react';

// Don't use this!!!
function Antipattern() {
  return (
    <button
      id="my-button"
      onClick={() => {
        document.getElementById('my-button').textContent = 'Clicked!';
      }}
    >
      Click me!
    </button>
  );
}

function WithoutAntipattern() {
  const [toggleText, setToggleText] = useState(false);

  return (
    <button onClick={() => setToggleText(true)}>
      {toggleText ? 'Clicked!' : 'Click Me!'}
    </button>
  );
}

export default function ExampleReactAntipattern() {
  return (
    <>
      <Antipattern />
      <Antipattern />
      <br />
      <WithoutAntipattern />
    </>
  );
}
