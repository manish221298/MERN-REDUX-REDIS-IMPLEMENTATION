import axios from "axios"

// http://localhost:4005/addcandidate
export const addEmployee = (data) => {
    return {type: 'ADD_EMPLOYEE', payload: data}
}

export const startAddEmployee = (formData) => {
    return (dispatch) => {
        axios.post(`http://localhost:4005/addcandidate`, formData)
        .then(res => {
            dispatch(addEmployee(formData))
        })
        .catch(err => {
            alert("error")
        })
        
    }
}