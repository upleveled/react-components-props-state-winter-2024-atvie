import ExampleComponents from './ExampleComponents';
import ExampleProps from './ExampleProps';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';

export default function App() {
  return (
    <>
      <h1>Example: Import and Export Components</h1>
      <ExampleComponents />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Props</h1>
      <ExampleProps
        name="Karl"
        age={35}
        address={{ street: '123 Main Str.', zipCode: 1234 }}
      />
      <hr />
      <ExampleProps
        name="Antje"
        age={35}
        address={{ street: '456 Main Str.', zipCode: 9876 }}
      />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: State Counter</h1>
      <ExampleStateCounter />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: State Email</h1>
      <ExampleStateEmail />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
