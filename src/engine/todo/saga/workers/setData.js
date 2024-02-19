import {v4 as uuidv4 } from 'uuid';
import { put, delay, select} from 'redux-saga/effects'
import slice from '../../redux/slice'
import Selectors from "../../redux/selectors.js";
export function* setDataWorker(action) {
    const { payload } = action;
    const items = yield select(Selectors.items)
    const newItem = {
        id: `item_${uuidv4()}`,
        text: payload.target.text_input.value,
        isChecked: false,
    };
    payload.preventDefault();
    yield put(slice.actions.setLoading(true));
    yield delay(2000);
    yield put(slice.actions.addItem(newItem));
    yield put(slice.actions.setLoading(false))
    localStorage.setItem('items', JSON.stringify([...items, newItem]));
}