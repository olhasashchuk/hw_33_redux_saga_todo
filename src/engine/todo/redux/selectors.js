export default {
    items: state => state.todo.items,
    loading: state => state.todo.loading,
    editingItemId: state => state.todo.editingItemId,
}