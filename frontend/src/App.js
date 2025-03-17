import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
// import AddUser from './pages/addUser';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/add" element={<AddUser />} /> */}
      </Routes>
    </>
  );
}

export default App;
