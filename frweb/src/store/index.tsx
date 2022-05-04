import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./features/counter/counterSlice";
// import movieSlice from "./features/movie/movieSlice";

const store = configureStore({
  reducer: {
    // counter: counterSlice,
    // movie: movieSlice,
  }
});
export default store;
