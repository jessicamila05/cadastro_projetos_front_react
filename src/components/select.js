import React from 'react';
import {Input} from 'reactstrap';

 export default(props) => {

    const  options = props.list.map((option, index) =>{
        return(
            <option key={index} value={option.value}>{option.label}</option>
        )
    })

    return(
        <Input 
        type="select" 
        name="select" 
        id="exampleSelect"
        {...props}>
            {options}
        </Input>
    )
}