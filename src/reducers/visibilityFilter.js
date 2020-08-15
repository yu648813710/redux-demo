
const filterData = [
    {type: 'ALL', name:'全部', active: true},
    {type: 'END', name:'完成', active: false},
    {type: 'ACTIVE', name:'进行中', active: false},
]
const filter = (state = filterData, action) => {
    switch(action.type) {
        case 'CHANG':
            return state.map(res => {
                res.active = res.type === action.idType
                return res;
            })
        default:
            return state
    }
}
export default filter