import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'


class Parent extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Prem",
            
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Prem"
            })
        },2000)
    }
    render() {
        console.log("***************Parent***************");
        return (
            <div>
                Parent Component
                <RegularComponent name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default Parent
