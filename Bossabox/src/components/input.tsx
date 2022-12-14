import React from 'react'

interface InputProps{
    type:React.HTMLInputTypeAttribute;
    border:string,
    height:number,
    width:number,
    placeholder:string,
    borderRadius:number,
    marginBottom?:number,
    onChange?:any,
    value?:any

}
//@ts-ignore
const App:React.FC<InputProps> = (props) => {

    return(
        <>
        <input 
        type={props.type} 
        style={{border:props.border,height:props.height,width:props.width,borderRadius:props.borderRadius,outline:0,position:'absolute',}}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        /> 
        </>
    )


}

export default App