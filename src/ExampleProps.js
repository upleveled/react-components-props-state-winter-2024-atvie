// name: string
// age: number
// address: {
// street: string
// zipCode: number
// }

export default function ExampleProps(props) {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.age}</div>
      <div>{props.address.street}</div>
      <div>{props.address.zipCode}</div>
    </>
  );
}
