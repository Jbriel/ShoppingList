import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/header';

import ShoppingList from './containers/shoppingList'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<ShoppingList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
