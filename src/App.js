import logo from './logo.svg';
import './App.css';
import Index from './Index.tsx';
import Display from './Display.tsx';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Index />
      <Display />
    </div>
  );
}

export default App;
