# `@antonfilka/input`

A customizable UI input component for building ui in your web applications

## Installation

```bash
npm install @antonfilka/input
```

## Usage

```jsx
import Input from '@antonfilka/input';

function App() {
    return (
        <div>
            <h1>Enter your name:</h1>
            <Input placeholder="Your Name" onChange={(e) => console.log(e.target.value)} />
        </div>
    );
}

export default App;
```
