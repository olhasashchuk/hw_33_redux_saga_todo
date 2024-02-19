import {Button} from "./Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import selectors from "../../engine/todo/redux/selectors.js"
import {clearDataAsyncAction} from "../../engine/todo/saga/asynkActions.js";

export function Footer () {
    const items = useSelector(selectors.items)
    const dispatch = useDispatch();

    const onClear = () => {
        dispatch(
            clearDataAsyncAction()
        )
    }

    return (
        <div className="d-flex justify-content-between">
            <span>Count: {items.length}</span>
            <Button className="btn-secondary" onClick={onClear}>Clear</Button>
        </div>
    )
}