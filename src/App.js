import ExampleClassToFunctionClass from './ExampleClassToFunction';
import ExampleComponents from './ExampleComponents';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleFormsWIthControlledComponents from './ExampleFormsWIthControlledComponents';
import ExampleLiftingStateUp from './ExampleLiftingStateUp';
import ExampleMappingOverArrays from './ExampleMappingOverArrays';
import ExamplePropDestructuring from './ExamplePropDestructuring';
import ExampleProps from './ExampleProps';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';
import ExampleStylingOptions from './ExampleStylingOptions';

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
      <h1>Example: Mapping over Arrays</h1>
      <ExampleMappingOverArrays />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Conditional Rendering</h1>
      <ExampleConditionalRendering />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Props Destructuring</h1>
      <ExamplePropDestructuring />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Forms with Controlled Components</h1>
      <ExampleFormsWIthControlledComponents />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Lifting State Up</h1>
      <ExampleLiftingStateUp />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Styling Options</h1>
      <ExampleStylingOptions />
      <br />
      <br />
      <br />
      <br />
      <ExampleClassToFunctionClass
        user={{
          details: 'details',
          name: 'Lukas',
          imageAlt: 'this is an image',
          image:
            'https://api.memegen.link/images/buzz/memes/memes_everywhere.png?width=400',
        }}
      />
      <ExampleClassToFunctionClass />
    </>
  );
}
