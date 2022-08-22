
import './App.css';

import 'antd/dist/antd.css';
import Home from './Pages/home'
import Detail from './Pages/detail'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  return (

    <Router>
      <Routes >
        <Route exact path="/" element={<Home />}>

        </Route>
        <Route path="/about" element={<Detail />}>

        </Route>
      </Routes >
    </Router>
  );
}

export default App;
