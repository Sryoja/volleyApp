// import { createSlice } from "@reduxjs/toolkit";
//
//
// const initialState = [
//     {
//         id: "1",
//         text: "hello",
//     },
//     {
//         id: "2",
//         text: "hello i'm second",
//     },
//     {
//         id: "3",
//         text: "hello, i'm third",
//     },
// ]
//
// const postsSlice = createSlice({
//     name: "posts",
//     initialState,
//     reducers: {
//         addPost: (state, action) => {
//             console.log(state)
//             console.log(action)
//             let pl = action.payload
//             let newPost = {
//                 id: new Date().toString(),
//                 text: pl.text
//              }
//              state.push(newPost)
//         }
//     }
// })
// console.log (postsSlice)
// export const {addPost} = postsSlice.actions
// export default postsSlice.reducer