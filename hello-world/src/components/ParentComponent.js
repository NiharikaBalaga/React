import React, { Component } from 'react'
//import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         
        ParentName:'Parent'
    }
    // this.greetParent = this.greetParent.bind(this)
}

// greetParent(){
//     alert(`Hello ${this.state.ParentName}`)
// }

greetHandler=()=>{
    this.setState({
        ParentName:'Hi Parent'
    })
}


    render() {
        return (
            <div>
                <h1>{this.state.ParentName}</h1>
               <button onClick ={this.greetHandler}>Greet Parent</button>
                {/* <ChildComponent greetHandler ={this.greetParent}/> */}
            </div>
        )
    }
}

export default ParentComponent
