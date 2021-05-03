import React from 'react'

const Greet = (props) =>{
    console.log(props)
return(
    <div>
        <h1>Hello {props.name} aka {props.heroname}</h1>
        {props.children}
    </div> 
)
}

//1.Destructuring the parameter
// const Greet = ({name,heroname}) =>{
//     console.log(props)
// return(
//     <div>
//         <h1>Hello {name} aka {heroname}</h1>
//         {props.children}
//     </div> 
// )
// }
//2.Destructuring the parameter
// const Greet = (props) =>{
//    const{name,heroname}=props
// return(
//     <div>
//         <h1>Hello {name} aka {heroname}</h1>
//         {props.children}
//     </div> 
// )
// }

export default Greet;