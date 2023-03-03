export const addEmployee = (data) => {
    return {type: 'ADD_EMPLOYEE', payload: data}
}

export const startAddEmployee = (formData) => {
    console.log("formdata inside action", formData)
    return (dispatch) => {
        dispatch(formData)
    }
}