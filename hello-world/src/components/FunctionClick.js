import React from 'react'

function FunctionClick() 
{
    function clickHandler(){
    console.log('Button clicked')
}
    return (
        <div>
            <button onClick={clickHandler}>click</button>
            {/* if we write parenthesis() it means "function calling" is happening not "event" due to which function will be called before event is (clicked)*/}
            {/* <button onClick={clickHandler()}>click</button> */}
        </div>
    )
}

export default FunctionClick
