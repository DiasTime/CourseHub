import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Course from './pages/Course';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<Course />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

/* 
        <Footer /> */
