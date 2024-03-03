import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPostAsync } from '../../store/postSlice';
import './PostDetails.css';

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostAsync(id));
  }, [dispatch, id]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='content-block'>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>
            <button className="button-89" id='btn2' role="button" onClick={handleBack}>
              Back
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
