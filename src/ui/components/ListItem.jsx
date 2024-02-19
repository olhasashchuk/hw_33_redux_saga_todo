import { Button } from './Button.jsx';
import { useDispatch, useSelector } from "react-redux";
import Selectors from '../../engine/todo/redux/selectors.js';
import {
    checkedDataAsyncAction,
    deleteDataAsyncAction,
    editDataAsyncAction, saveDataAsyncAction,
    setEditDataAsyncAction
} from "../../engine/todo/saga/asynkActions.js";

export function ListItem(props) {
    const dispatch = useDispatch();
    const { id, text, isChecked } = props;
    const isEditing =  useSelector (state => Selectors.editingItemId(state) === id);

    const handleCheckedItem = () => {
        dispatch(checkedDataAsyncAction({ id, isChecked: !isChecked }))
    }

    const handleEditClick = () => {
        dispatch(setEditDataAsyncAction(id))
        console.log(id)
    }

    const handleInputChange = (event) => {
        dispatch (editDataAsyncAction({ id, text: event.target.value }));
    }

    const handleEditSubmit = () => {
        dispatch(saveDataAsyncAction(id));
        dispatch(setEditDataAsyncAction(null))
    }

    const handleRemoveItem = () => {
        dispatch(deleteDataAsyncAction(id));
    }
    return (

    <li className="list_component">
        <input
            id={id}
            className="form-check-input"
            type="checkbox"
            onChange={handleCheckedItem}
            checked={isChecked}
        />
        {isEditing ? (
            <>
                <input
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                    autoFocus
                />
                <Button className="btn-secondary" onClick={handleEditSubmit}>Save</Button>
            </>
        ) : isChecked ? (
            <>
                <label htmlFor={id} className="list_component_text" style={{ textDecoration: 'line-through'}}>
                    {text}
                </label>
                <Button className="btn-secondary" onClick={handleEditClick}>Edit</Button>
            </>
        ) : (
            <>
                <label htmlFor={id} className="list_component_text" style={{ textDecoration: 'initial'}}>
                    {text}
                </label>
                <Button className="btn-secondary" onClick={handleEditClick}>Edit</Button>
            </>
        )}
        <Button className="btn-secondary" onClick={handleRemoveItem}>Remove</Button>
    </li>
    )
}