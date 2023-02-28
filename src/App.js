import './App.css';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import Greeting from './components/Greeting';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/greetings" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
