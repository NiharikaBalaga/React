import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)
    
        this.state={
                 message:'Hello'
             }
        }

        eventbinding(){
            this.setState({
                message:'Thank You!'
            })
        }
    
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={() => this.eventbinding()}>click</button>
            </div>
        )
    }
}

export default EventBinding
