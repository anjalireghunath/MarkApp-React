import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddStudent from './components/AddStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
  <Route path='/' exact element={<AddStudent/>}/>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
