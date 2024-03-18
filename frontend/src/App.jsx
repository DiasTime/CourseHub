import { Route, Routes } from 'react-router-dom';

import { useState, useEffect, createContext } from 'react';
import { db } from './firebase';
import { onSnapshot, collection } from 'firebase/firestore';

import Header from './components/Header';
import Footer from './components/Footer';
import Lessions from './pages/Lessions';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export const CourseContext = createContext([]);

function App() {
  const [courses, setCourses] = useState([]);
  const collectionRef = collection(db, 'courses');
  useEffect(() => {
    const getData = onSnapshot(collectionRef, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCourses(items);
    });
    return () => {
      getData();
    };
  }, []);

  return (
    <>
      <CourseContext.Provider value={{ courses }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessions/:courseId" element={<Lessions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CourseContext.Provider>
    </>
  );
}

export default App;
