import ExampleArrayOfObjectsInReact from './ExampleArrayOfObjectsInReact';
import ExampleChildrenProps from './ExampleChildrenProps';
import ExampleClassToFunctionClass from './ExampleClassToFunction';
import ExampleComponents from './ExampleComponents';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleControlledComponentCheckbox from './ExampleControlledComponentCheckbox';
import ExampleDataFetching from './ExampleDataFetching';
import ExampleDataModeling from './ExampleDataModeling';
import ExampleDerivingState from './ExampleDerivingState';
import ExampleFormsWIthControlledComponents from './ExampleFormsWIthControlledComponents';
import ExampleLiftingStateUp from './ExampleLiftingStateUp';
import ExampleMappingOverArrays from './ExampleMappingOverArrays';
import ExamplePropDestructuring from './ExamplePropDestructuring';
import ExamplePropDrilling from './ExamplePropDrilling';
import ExampleProps from './ExampleProps';
import ExampleReactAntipattern from './ExampleReactAntipattern';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStateEmail from './ExampleStateEmail';
import ExampleStateManagement from './ExampleStateManagement';
import StateManagement from './ExampleStateManagement';
import ExampleStylingOptions from './ExampleStylingOptions';
import ExampleUseEffect from './ExampleUseEffect';

export default function App() {
  return (
    <>
      <h1>Example: Data Fetching</h1>
      <ExampleDataFetching />
      <br />
      <br />
      <br />
      <br />
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
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Children Props</h1>
      <ExampleChildrenProps />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: React Antipattern</h1>
      <ExampleReactAntipattern />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Controlled Component Checkbox</h1>
      <ExampleControlledComponentCheckbox />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Array of Objects</h1>
      <ExampleArrayOfObjectsInReact />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: UseEffect</h1>
      <ExampleUseEffect />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Data Modeling</h1>
      <ExampleDataModeling />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Extra State variables vs. Deriving State</h1>
      <ExampleDerivingState />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: Prop Drilling vs Children Props</h1>
      <ExamplePropDrilling />
      <br />
      <br />
      <br />
      <br />
      <h1>Example: State Management Solutions</h1>
      <ExampleStateManagement />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
