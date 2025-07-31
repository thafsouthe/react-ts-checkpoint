// 1. Import React and Component from 'react'
import React, { Component } from 'react';

// 2. Define a type for the component's props
// This component doesn't receive any props, so we use an empty object
type CounterProps = {};

// 3. Define a type for the component's state
type CounterState = {
  count: number; // We are tracking a single piece of state: 'count'
};

// 4. Create a class component and pass the props and state types as generics to Component
class Counter extends Component<CounterProps, CounterState> {
  // 5. Initialize the state with the correct type
  state: CounterState = {
    count: 0,
  };

  // 6. Define the increment method using arrow function syntax
  // Arrow functions automatically bind 'this' to the class instance
  increment = () => {
    // Use setState to update the count
    this.setState({ count: this.state.count + 1 });
  };

  // 7. Render method returns JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// 8. Export the component for use in the app
export default Counter;
