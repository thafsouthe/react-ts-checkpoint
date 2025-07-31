// 1. Import React (still required when using JSX)
import React from 'react';

// 2. Define a TypeScript "type" for the component's props
// This tells TypeScript that this component expects a 'name' prop, and it must be a string
type GreetingProps = {
  name: string;
};

// 3. Declare the component using React.FC (FunctionComponent)
//    - React.FC is a generic type provided by React for function components
//    - It automatically types 'children' (if used) and adds some helpful typings
//    - We pass our GreetingProps to React.FC so it knows what props are expected
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // 4. Render a simple div with a personalized greeting
  return <div>Hello, {name}!</div>;
};

// 5. Export the component so it can be used in other parts of the app
export default Greeting;
