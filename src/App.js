import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { ListUser } from './components/ListUser';
import { CreateUser } from './components/CreateUser';
import { EditUser } from './components/EditUser';

function App() {
  return (
    <div className="App">
      <h5>CRUD with PHP</h5>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Users</Link>
            </li>
            <li>
              <Link to={'/user/create'}>Create Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="/user/create" element={<CreateUser />} />
          <Route path="/user/:id/edit" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
