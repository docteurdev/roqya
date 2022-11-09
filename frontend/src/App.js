import './App.css';
// import Dash from './pages/dash/Dash';
import Login from './pages/login/Login';
import { Provider } from "react-redux"
import { store } from './redux/store';
import RouteNav from './routes/routes';
import { Route, Routes } from 'react-router-dom';
import { Dash, Register } from './pages';

function App() {
  return (
    <Provider store={store} >
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/board' element={<Dash />} />
        <Route path='/create-center' element={<Register />} />

      </Routes>
    </Provider>
  );
}

export default App;
