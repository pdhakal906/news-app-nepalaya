import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import RootLayout from './components/RootLayout';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


function App() {

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/news/:id' element={<NewsPage></NewsPage>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
