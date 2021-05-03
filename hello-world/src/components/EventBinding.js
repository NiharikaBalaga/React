import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)
    
        this.state={
                 message:'Hello'
             }
            //   this.eventbinding=this.eventbinding.bind(this)
        }

        // eventbinding(){
        //     this.setState({
        //         message:'Thank You!'
        //     })
        //     console.log(this)
        // }

        //4. Arrow function way
        eventbinding=()=>{
            this.setState({
                message:'Thank You!'
            })
            console.log(this)
        }
    
        
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*Normal method which throws error undefined */}
                {/* <button onClick={this.eventbinding}>Click</button> */}

                {/* 1.BINDING IN RENDER METHOD:
                Using bind method with make it work,but it good for small components as it renders each time any update take place (Lack in performance for big applications)*/}
                {/* <button onClick={this.eventbinding.bind(this)}>click</button> */}

                {/* 2.ARROW FUNCTION METHOD:
                ()is used while calling becoz it return the whole method,no need to use return keyword in arrow function */}
                {/* <button onClick={() => this.eventbinding()}>click</button> */}

                {/* 3.BINDING EVENT HANDLER IN CLASS CONSTRUCTOR:(Official way React website)
                We write code in constructor bind it and write normal JSX code in render function */}
                <button onClick={this.eventbinding}>click</button>

                {/* 4.WRITE FUNCTION USING ARROW METHOD */}
            </div> 
        )
    }
}

export default EventBinding
