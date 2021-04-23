import React, {
    Component
} from 'react'

class UserGreet extends Component {


    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        return (
            this.state.isLoggedIn ?
            <div > Hey Neha! </div> : 
            <div > Hey Manoj! </div>
        )

        // return (
        //     <div>
        //     <div>Hey Neha!</div>
        //     <div>Hey Manoj!</div>
        //     </div>

        // )
    }
}

export default UserGreet