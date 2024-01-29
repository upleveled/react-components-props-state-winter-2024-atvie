import { useEffect, useState } from 'react';

// count1 > 0 count2 > 0 --> display count1, count2
// count1 > 0 count2 < 0 --> display count1
// count2 > 0 count1 < 0 --> display count2
// count2 < 0 count1 < 0 --> display nothing

// Deriving State
function calculatePositiveValues(number1, number2) {
  if (number1 > 0 && number2 > 0) {
    return [number1, number2];
  } else if (number1 > 0 && number2 <= 0) {
    return [number1];
  } else if (number1 <= 0 && number2 > 0) {
    return [number2];
  } else if (number1 <= 0 && number2 <= 0) {
    return [];
  }
}

export default function ExampleDerivingState() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // Extra state variable
  // const [positiveValues, setPositiveValues] = useState([]);

  // useEffect(() => {
  //   if (count1 > 0 && count2 > 0) {
  //     setPositiveValues([count1, count2]);
  //   } else if (count1 > 0 && count2 < 0) {
  //     setPositiveValues([count1]);
  //   } else if (count1 < 0 && count2 > 0) {
  //     setPositiveValues([count2]);
  //   } else if (count1 < 0 && count2 < 0) {
  //     setPositiveValues([]);
  //   }
  // }, [count1, count2]);

  return (
    <>
      <div>
        <div>{count1}</div>
        Count 1<button onClick={() => setCount1(count1 + 1)}>+</button>
        <button onClick={() => setCount1(count1 - 1)}>-</button>
      </div>
      <div>
        <div>{count2}</div>
        Count 2<button onClick={() => setCount2(count2 + 1)}>+</button>
        <button onClick={() => setCount2(count2 - 1)}>-</button>
      </div>
      <div>
        Positive Values: {calculatePositiveValues(count1, count2).join(', ')}
      </div>
    </>
  );
}
