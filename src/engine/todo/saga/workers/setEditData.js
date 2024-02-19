import { put } from 'redux-saga/effects'
import slice from '../../redux/slice'
export function* setEditDataWorker(action) {
    const {payload} = action;
    yield put(slice.actions.setEditingItem(payload));
}
