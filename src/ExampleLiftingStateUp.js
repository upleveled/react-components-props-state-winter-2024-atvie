import { useState } from 'react';

function LightBulb(props) {
  return <div>lightbulb is {props.isOn ? 'on 🌞' : 'off 🌑'}</div>;
}

function Switch(props) {
  return <button onClick={() => props.setIsOn(!props.isOn)}>toggle</button>;
}

export default function ExampleLiftingStateUp() {
  // 1. use state in the parent component
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      {/* 2. use state as props in the child components */}
      <LightBulb isOn={isOn} />
      <Switch isOn={isOn} setIsOn={setIsOn} />
    </>
  );
}
