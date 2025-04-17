import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export function App() {
  return (
      <div className="flex flex-col items-center justify-center min-h-svh">
        <h1>Hello World</h1>
      <Button variant="default" size="lg">Click me</Button>
    </div>
  );
}

export default App;
