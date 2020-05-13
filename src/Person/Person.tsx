import React from 'react'
import './Person.css';


const Person = (props: any) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} and Age is {props.age}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Person;


