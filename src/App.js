import logo from './logo.svg';
import './App.css';
import Index from './Index.tsx';
import Calender from './Calender.tsx';
import Form from './Form.tsx';
import Display from './Display.tsx';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Index/>
     <Form/>
     <Calender/>
    </div>
  );
}

export default App;
