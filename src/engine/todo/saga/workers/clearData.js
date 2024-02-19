import { put } from 'redux-saga/effects';
import slice from '../../redux/slice';

export function* clearDataWorker() {
    const payload = [];
    yield put(slice.actions.setItems(payload))
    localStorage.setItem('items', JSON.stringify(payload));

}
