
const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'CHANGE_TODO':
            return state.map(res => {
                if(res.id === action.id) {
                    res.completed = !res.completed;
                }
                return res;
            })
        default:
            return state
    }
}
export default todos