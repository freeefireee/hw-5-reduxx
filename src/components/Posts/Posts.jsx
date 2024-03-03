import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPostsAsync } from '../../store/postSlice';
import './posts.css';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);

  return (
    <div className='content'>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      {posts.map((post) => (
        <div className='block' key={post.id}>
          <h2 className='txt'>{post.title}</h2>
          <p className='txt'>
            {post.body} 
            <Link to={`/posts/${post.id}`}>more...</Link>
          </p>
          <button id='btn1' className="button-85" role="button">
          <Link to={`/posts/${post.id}`}>more...</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Posts;


