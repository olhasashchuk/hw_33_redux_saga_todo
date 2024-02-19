import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../engine/todo/redux/slice.js';
import sagaMiddleWare from "./middleware/saga.js";
import {rootSaga} from "./rootSaga.js";

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    },
    middleware: () => [
        sagaMiddleWare]
})

sagaMiddleWare.run(rootSaga)