import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Header from './components/Header';
import Ranking from './pages/Ranking';
import { AuthProvider } from './contexts/AuthContext';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
