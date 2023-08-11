import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<AllUsers />} />
        <Route path='all' element={<AllUsers />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
// 1:02:00
