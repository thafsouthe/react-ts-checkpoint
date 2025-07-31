# React + TypeScript Checkpoint

This project was created as a learning checkpoint to practice converting React components from JavaScript to TypeScript.

---

## 📁 Project Setup

The project was created using Create React App with TypeScript support:

```bash
npx create-react-app react-ts-checkpoint --template typescript
````

All TypeScript components were added to a folder: `src/components/`.

---

## ✅ Objectives Completed

### 1. Functional Component Conversion

#### 🟡 Original JavaScript Code

```jsx
import React from 'react';

const Greeting = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
```

#### ✅ What Was Done

* Converted this functional component to TypeScript.
* Created a `GreetingProps` type to define expected props.
* Used `React.FC` to type the component.
* The final version is located at:
  `src/components/Greeting.tsx`

---

### 2. Class Component Conversion

#### 🟡 Original JavaScript Code

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

#### ✅ What Was Done

* Converted this class component to TypeScript.
* Defined `CounterProps` and `CounterState` types.
* Used `Component<CounterProps, CounterState>` for typing.
* The final version is located at:
  `src/components/Counter.tsx`

---

### 3. Integration in `App.tsx`

Both components were imported and used in the main app:

```tsx
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greeting name="TypeScript Learner" />
      <Counter />
    </div>
  );
}
```

---

## 📚 Skills Practiced

* Creating and configuring a TypeScript-based React project
* Typing function and class components
* Defining prop and state types
* Organizing components in a structured folder
* Running and verifying the app

---

## 🚀 How to Run

1. Clone or download this repo
2. In the project directory, run:

```bash
npm install
npm start
```

Then open your browser at `http://localhost:3000`.

---

## 💬 Author

Built by a Thafsouthe Hassani, practicing React + TypeScript by converting existing components and understanding how typing improves reliability and clarity.

```


# react-ts-checkpoint
