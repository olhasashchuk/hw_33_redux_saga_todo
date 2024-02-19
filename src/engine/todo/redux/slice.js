import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice ({
    name: 'todo',
    initialState: {
        items: [],
        loading: true,
        editingItemId: null,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },

        setEditingItem: (state, action) => {
            state.editingItemId = action.payload;
        },

        setChangeText: (state, action) => {
            const { id, text } = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            if (index !== -1) {
                state.items[index].text = text;
            }

        },

        saveEditedText: (state, action) => {
            const updatedItem = action.payload;
            state.items = state.items.map(item => {
                if (item.id === updatedItem.id) {
                    return { ...item, text: updatedItem.text };
                }
                return item;
            });
        },

        setCheckedItem: (state, action) => {
            const { id, isChecked } = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            if (index !== -1) {
                state.items[index].isChecked = isChecked;
            }
            if (isChecked) {
                const [checkedItem] = state.items.splice(index, 1);
                state.items.push(checkedItem);
            }
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
})


export default todoSlice