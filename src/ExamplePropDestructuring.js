// function Tweet(props) {
//   return (
//     <div style={{ border: '2px solid', margin: '8px', padding: '12px' }}>
//       <h2>{props.user}</h2>
//       <div>message: {props.message}</div>
//       <h3>Likes: {props.likes}</h3>
//     </div>
//   );
// }

// Props destructure

function Tweet({ user, message, likes }) {
  return (
    <div style={{ border: '2px solid', margin: '8px', padding: '12px' }}>
      <h2>{user}</h2>
      <div>message: {message}</div>
      <h3>Likes: {likes}</h3>
    </div>
  );
}

export default function ExamplePropDestructuring() {
  return (
    <>
      <Tweet user="Victor" message="I like React" likes={12} />
      <Tweet user="Karl" message="Please post in Slack" likes={110} />
    </>
  );
}
