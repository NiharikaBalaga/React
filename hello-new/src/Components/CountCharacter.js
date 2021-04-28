import React, { Component } from 'react'

class EmployeeCharacterCounter extends Component{

    constructor(props){
        super(props);
        this.state={
                message:'',
                // counter:20

        };
    }
    onMessageChange(text){
        this.setState({
            message:'Message has '+ text.length+' characters'
        });
    }
    render(){
        return <div>
            <h2>Welcome to Counter Character Component</h2>
            <p>
                <label>Enter Message:<input type="text" onChange={e=> this.onMessageChange(e.target.value)}></input></label>
            </p>
            <p><label>{this.state.message}</label></p>
            {/* <p><label>{this.state.counter}</label></p> */}
            
        </div>
    }
}


export default EmployeeCharacterCounter
