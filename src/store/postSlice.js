import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/api';

export const fetchPostsAsync = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await api.fetchPosts();
  return response;
});

export const fetchPostAsync = createAsyncThunk('posts/fetchPost', async (id) => {
  const response = await api.fetchPost(id);
  return response;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], post: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPostsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPostAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.post = action.payload;
      })
      .addCase(fetchPostAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
