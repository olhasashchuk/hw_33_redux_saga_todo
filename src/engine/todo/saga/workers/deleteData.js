import { put, select } from 'redux-saga/effects';
import slice from '../../redux/slice';
import Selectors from "../../redux/selectors.js";

export function* deleteDataWorker(id) {
    const {payload} = id;
    yield put(slice.actions.deleteItem(payload));
    const items = yield select(Selectors.items)
    localStorage.setItem('items', JSON.stringify(items));
}