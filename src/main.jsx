import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LandingPage from './LandingPage.jsx'
import SplashLoader from './components/SplashLoader'

const Main = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashLoader onFinish={() => setLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/summit" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
