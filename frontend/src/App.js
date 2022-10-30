import './App.css';
import Dash from './pages/dash/Dash';
// import Login from './pages/login/Login';
import {Provider} from "react-redux"
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store} >

    <div className="App">
      {/* <Login/> */}
      <Dash/>
    </div>
    </Provider>
  );
}

export default App;
