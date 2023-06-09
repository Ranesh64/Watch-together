import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_VIDEO_URL } from "./constants";

export const fetchData = createAsyncThunk("video/fetch", async () => {
  const data = await fetch(YOUTUBE_VIDEO_URL);
  const videos = await data.json();
  return videos;
});

const videoSlice = createSlice({
  name: "video",
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.items;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default videoSlice.reducer;
