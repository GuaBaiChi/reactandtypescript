
import { useRef } from 'react';

import './App.css';
import Input from "./components/Input";
import Form, { type FormHandle } from './components/Form';
import Button from './components/Button';
import Container from './components/Container'

export function App() {
  // const input = useRef<HTMLInputElement>(null)
  const customForm = useRef<FormHandle>(null)

  function handleSave(data: unknown) {
    const extractedData = data as { name: string, age: string }
    console.log(extractedData)
    customForm.current?.clear()
  }
  return (

    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
      {/* <Input label="Test" id="test" ref={input} /> */}
      {/* <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" /> */}
      {/* <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href='https://google.com'>A Link</Button>
      </p> */}
      {/* <Container as={Button} >Click Me</Container> */}
    </main>
  )
}

export default App;
