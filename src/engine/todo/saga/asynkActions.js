import { createAction } from "@reduxjs/toolkit";
import {checkedDataWorker} from "./workers/checkedData.js";

export const getDataAsyncAction = createAction('GET_DATA_ASYNC')
export const setDataAsyncAction = createAction('SET_DATA_ASYNC')
export const deleteDataAsyncAction = createAction('DELETE_DATA_ASYNC')
export const clearDataAsyncAction = createAction('CLEAR_DATA_ASYNC')
export const setEditDataAsyncAction = createAction('SET_EDIT_DATA_ASYNC')
export const editDataAsyncAction = createAction('EDIT_DATA_ASYNC')
export const saveDataAsyncAction = createAction('SAVE_EDIT_DATA_ASYNC')
export const checkedDataAsyncAction = createAction('CHECKED_DATA_ASYNC')
