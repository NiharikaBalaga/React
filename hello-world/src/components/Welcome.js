import React, { Component } from 'react'

class Welcome extends Component{
    render() {
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroname}</h1>
    }
    //1.Destructuring props
    // render() {
     //const{name,heroname}=this.props   
    //     return <h1>Welcome {name} a.k.a {heroname}</h1>
    // }
}
 
export default Welcome