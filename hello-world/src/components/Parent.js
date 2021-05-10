import React, { Component} from 'react'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'
import Memo from './Memo'


class Parent extends Component {
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
                <Memo name={this.state.name}/>
                {/* <RegularComponent name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default Parent
