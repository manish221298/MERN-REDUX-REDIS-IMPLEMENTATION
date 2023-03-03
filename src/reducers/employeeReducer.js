const initialState = []

const employeeReducer = (state= initialState, action) => {
    switch(action.type){
        case 'ADD_EMPLOYEE' : {
            return [...state, action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default employeeReducer