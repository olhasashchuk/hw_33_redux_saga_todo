import { put } from 'redux-saga/effects'
import slice from '../../redux/slice'
export function* editDataWorker(action) {
    const { payload } = action;
    const editedItem = {
        id: payload.id,
        text: payload.text,
    };
    yield put(slice.actions.setChangeText(editedItem));
}

