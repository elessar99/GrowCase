export const setControl=(control)=>{
    return {
        type:"SET_CONTROL",
        payload:control
    }
}
export const controlTrue=()=>{
    return {
        type:"TRUE_CONTROL",
        payload:true
    }
}
export const controlFalse=()=>{
    return {
        type:"FALSE_CONTROL",
        payload:false
    }
}