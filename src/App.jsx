import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostsDetails/PostDetails';
import Header from './components/Header/Header';
import { fetchPostsAsync } from './store/postSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/" element={<Posts />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
