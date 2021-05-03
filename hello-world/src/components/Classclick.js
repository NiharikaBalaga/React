import React, { Component } from 'react'

class Classclick extends Component {
clickHandeler(){
    console.log('clicked the button')
}


    render() {
        return (
            <div>
                <button onClick={this.clickHandeler}>Click</button>
                {/* if we write parenthesis() it means "function calling" is happening not "event" due to which function will be called before event is (clicked)*/}
                {/* <button onClick={this.clickHandeler()}>Click</button> */}
            </div>
        )
    }
}

export default Classclick
