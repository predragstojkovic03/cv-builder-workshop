import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResumeBuilderPage from './pages/ResumeBuilderPage';
import { ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/resume-builder' element={<ResumeBuilderPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
