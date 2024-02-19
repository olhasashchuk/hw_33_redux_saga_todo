import { takeEvery } from 'redux-saga/effects'
import {getDataWorker} from "./workers/getData.js";
import {
    checkedDataAsyncAction,
    clearDataAsyncAction,
    deleteDataAsyncAction,
    editDataAsyncAction,
    getDataAsyncAction, saveDataAsyncAction,
    setDataAsyncAction, setEditDataAsyncAction
} from "./asynkActions.js";
import {setDataWorker} from "./workers/setData.js";
import {deleteDataWorker} from "./workers/deleteData.js";
import {clearDataWorker} from "./workers/clearData.js";
import {saveEditedDataWorker} from "./workers/saveEditedData.js";
import {setEditDataWorker} from "./workers/setEditData.js";
import {editDataWorker} from "./workers/editData.js";
import {checkedDataWorker} from "./workers/checkedData.js";
export function* watcher() {
    yield takeEvery(getDataAsyncAction.type, getDataWorker);
    yield takeEvery(setDataAsyncAction.type, setDataWorker);
    yield takeEvery(deleteDataAsyncAction.type, deleteDataWorker);
    yield takeEvery(clearDataAsyncAction.type, clearDataWorker);
    yield takeEvery(setEditDataAsyncAction.type, setEditDataWorker);
    yield takeEvery(editDataAsyncAction.type, editDataWorker);
    yield takeEvery(saveDataAsyncAction.type, saveEditedDataWorker);
    yield takeEvery(checkedDataAsyncAction.type, checkedDataWorker);
}