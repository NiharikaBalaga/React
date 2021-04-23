import React, { Component } from 'react'

class Classclick extends Component {
clickHandeler(){
    console.log('clicked the button')
}


    render() {
        return (
            <div>
                <button onClick={this.clickHandeler}>Click</button>
            </div>
        )
    }
}

export default Classclick
