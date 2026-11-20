// Task1
// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./redux/counterSlice";

// export const store = configureStore({
//     reducer: {
//         counter: counterReducer
//     }
// });

// Task2 
// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./redux/userSlice";

// export const store = configureStore({
//     reducer: {
//         user: userReducer
//     }
// });

// Task 3
// import { configureStore } from "@reduxjs/toolkit";
// import themeReducer from "./redux/themeSlice";

// export const store = configureStore({
//     reducer: {
//         theme: themeReducer
//     }
// });

// Task 4

import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./redux/studentSlice";

export const store = configureStore({
  reducer: {
    student: studentReducer
  }
});
