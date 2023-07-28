import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoListSlice from "./videoListSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    videoList: videoListSlice,
  },
});

export default store;
