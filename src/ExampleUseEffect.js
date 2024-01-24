import { useEffect, useState } from 'react';

export default function ExampleUseEffect() {
  const [name, setName] = useState('Lukas');
  const [count, setCount] = useState(0);

  // You only need one!

  // 1. useEffect with no dependency array
  // the useEffect will run after initial and after every re-render
  // Avoid using useEffect without dependency arrays
  // useEffect(() => {
  //   document.title = `${name} clicked ${count}`;
  // });

  // 2. useEffect with empty dependency array
  // the useEffect will run only after initial render
  // useEffect(() => {
  //   document.title = `${name} clicked ${count}`;
  // }, []);

  // 3. useEffect with elements in dependency array
  // if the values in the dependency array have changed
  useEffect(() => {
    document.title = `${name} clicked ${count}`;
  }, [name, count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setName('Antje')}>Update name to Antje</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}
