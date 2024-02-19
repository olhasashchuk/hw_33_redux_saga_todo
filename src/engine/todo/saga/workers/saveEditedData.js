import { put, delay, select} from 'redux-saga/effects'
import slice from '../../redux/slice'
import Selectors from "../../redux/selectors.js";

export function* saveEditedDataWorker(action) {
    const { payload } = action;
    const items = yield select(Selectors.items)
    yield delay(1000);
    yield put(slice.actions.saveEditedText(payload));
    localStorage.setItem('items', JSON.stringify(items));
}

