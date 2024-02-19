import { put, select } from 'redux-saga/effects'
import slice from '../../redux/slice'
import Selectors from "../../redux/selectors.js";
export function* checkedDataWorker(action) {
    const { payload } = action;
    yield put(slice.actions.setCheckedItem(payload));
    const items = yield select(Selectors.items)
    localStorage.setItem('items', JSON.stringify(items));
}

