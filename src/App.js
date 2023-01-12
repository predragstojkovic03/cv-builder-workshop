import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResumeBuilderPage from './pages/ResumeBuilderPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/resume-builder' element={<ResumeBuilderPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
